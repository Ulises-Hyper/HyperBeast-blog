<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\NewsletterConfirmation;
use App\Models\Newsletter;
use App\Models\User;

class NewsletterController extends Controller
{
    public function store(Request $request)
    {

        // Validar el correo
        $request->validate([
            "email" => 'required|email',
        ]);

        // Verificar si está ya suscrito
        $existing = Newsletter::where("email", $request->email)->first();

        if ($existing) {
            return redirect()->back()->withErrors(['email' => 'Este correo ya está suscrito a la newsletter']);
        }

        // Buscar si el email pertenece a un usuario
        $user = User::where("email", "=", $request->email)->first();
        $user_id = $user?->id;

        // Guarda el correo e id en la base de datos
        Newsletter::create([
            'email' => $request->email,
            'user_id' => $user_id,
        ]);

        Mail::to($request->email)->send(new NewsletterConfirmation());

        return redirect()->back()->with("success", "¡Gracias por suscribirte a nuestra newsletter");
    }
}
