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
