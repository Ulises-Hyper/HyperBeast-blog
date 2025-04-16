<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Inertia\Inertia;
use Exception;

class FeedbackController extends Controller
{

    public function index() {
        $feedbacks = Feedback::all();

        return Inertia::render('Dashboard/Feedback', [
            'feedbacks' => $feedbacks
        ]);
    }

    public function store(Request $request){
        try {
            $feedback = $request->validate([
                'username' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string|max:2500',
            ]);

            Feedback::create([
                'username' => $feedback['username'],
                'email' => $feedback['email'],
                'message' => $feedback['message'],
            ]);
            
            return redirect()->back()->with('success', 'Feedback enviado correctamente!');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Error al enviar el feedback: ' . $e->getMessage());
        }
    }
}
