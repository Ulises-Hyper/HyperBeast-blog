<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    use AuthorizesRequests; // Asegúrate de tener este trait

    public function index()
    {
        // Obtener usuarios con sus roles
        $users = User::with('role')->get()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role ? $user->role->name : 'Sin rol',
                'status' => $user->status ?? 'N/A',
                'avatar' => $user->avatar,
            ];
        });

        // Pasar usuarios y el usuario autenticado
        $user = Auth::user();

        return Inertia::render('Dashboard/Users', [
            'users' => $users,
            'user' => $user,
        ]);
    }

    // Asegúrate de tener este método en UserController.php
    public function store(Request $request)
    {
        Log::info('Datos recibidos:', $request->all()); // Verifica los datos recibidos

        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users',
                'username' => 'required|string|max:255|unique:users',
                'password' => 'required|min:8|confirmed',
                'role' => 'required|exists:roles,name',
                'status' => 'required|in:active,inactive',
                'avatar' => 'nullable|image|max:4096'
            ]);

            Log::info('Datos validados:', $validated); // Verifica los datos validados

            // Guardar imagen
            if ($request->hasFile('avatar')) {
                try {
                    // Obtén el archivo
                    $file = $request->file('avatar');

                    // Genera un nombre único para el archivo
                    $fileName = time() . '_' . $file->getClientOriginalName();

                    // Mueve el archivo a la carpeta public/img
                    $file->move(public_path('img'), $fileName);

                    // Guarda la ruta del archivo en la base de datos
                    $validated['avatar'] = '/img/' . $fileName;
                } catch (\Exception $e) {
                    Log::error('Error al guardar la imagen: ' . $e->getMessage());
                    $validated['avatar'] = null;
                }
            } else {
                $validated['avatar'] = null;
            }

            // Crear usuario
            User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'username' => $validated['username'],
                'password' => Hash::make($validated['password']),
                'role_id' => Role::where('name', $validated['role'])->first()->id,
                'status' => $validated['status'],
                'avatar' => $validated['avatar'],
            ]);

            return redirect()->route('dashboard.users.index')->with('success', 'Usuario creado correctamente');
        } catch (\Exception $e) {
            Log::error('Error al crear usuario: ' . $e->getMessage());
            return back()->withInput()->withErrors(['error' => 'Ha ocurrido un error: ' . $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('Dashboard/Edit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);

            // Validación con mensajes personalizados
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'email' => 'sometimes|email|unique:users,email,' . $user->id,
                'username' => 'sometimes|string|max:255|unique:users,username,' . $user->id,
                'password' => 'nullable|min:8|confirmed',
                'role' => 'sometimes|nullable|exists:roles,name',
                'status' => 'sometimes|in:active,inactive',
                'avatar' => 'nullable|image|max:4096'
            ]);

            // Manejo de avatar: mantener el existente si no se sube uno nuevo
            if ($request->hasFile('avatar')) {
                try {
                    // Obtén el archivo
                    $file = $request->file('avatar');

                    // Genera un nombre único para el archivo
                    $fileName = time() . '_' . $file->getClientOriginalName();

                    // Mueve el archivo a la carpeta public/img
                    $file->move(public_path('img'), $fileName);

                    // Guarda la ruta del archivo en la base de datos
                    $validated['avatar'] = '/img/' . $fileName;
                } catch (\Exception $e) {
                    Log::error('Error al guardar la imagen: ' . $e->getMessage());
                    // No establecer a null, simplemente no incluir en la actualización
                    unset($validated['avatar']);
                }
            } else {
                // Quitar del array para no actualizar este campo
                unset($validated['avatar']);
            }

            // Actualizar contraseña solo si se proporciona
            if (!empty($validated['password'])) {
                $validated['password'] = Hash::make($validated['password']);
            } else {
                unset($validated['password']);
            }

            // Actualizar role_id solo si se proporcionó un rol
            if (array_key_exists('role', $validated) && !empty($validated['role'])) {
                $role = Role::where('name', $validated['role'])->first();
                if ($role) {
                    $validated['role_id'] = $role->id;
                }
                unset($validated['role']);
            }

            $user->update($validated);

            return redirect()->route('dashboard.users.index')->with('success', 'Usuario actualizado correctamente');

        } catch (\Exception $e) {
            Log::error('Error al actualizar usuario: ' . $e->getMessage());
            // Mantener consistencia en el tipo de respuesta (redirección)
            return redirect()->route('dashboard.users.index')->withInput()->with('error', 'Error al actualizar el usuario');
        }
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back()->with('message', 'Usuario eliminado correctamente');
    }

    public function toggleStatus($id)
    {
        $user = User::findOrFail($id);

        $this->authorize('update', $user);

        // Cambiar el estado
        $user->status = $user->status === 'active' ? 'inactive' : 'active';
        $user->save();

        return response()->json(['message' => 'Estado del usuario actualizado correctamente', 'newStatus' => $user->status]);
    }
}
