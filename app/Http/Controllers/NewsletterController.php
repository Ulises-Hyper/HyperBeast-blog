<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Newsletter;
use App\Mail\NewsletterConfirmation;

class NewsletterController extends Controller
{
    public function store(Request $request){
        
        // Validar el correo
        $request->validate([
            "email" => 'required|email|unique:newsletter,email',
        ]);

        // Guarda el correo en la base de datos
        Newsletter::create([
            'email' => $request->email,
        ]);

        Mail::to($request->email)->send(new NewsletterConfirmation());

        return redirect()->back()->with("success", "¡Gracias por suscribirte a nuestra newsletter");
    }
}
