<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Exception;

class FeedbackController extends Controller
{

    public function index()
    {
        $feedbacks = Feedback::all();

        return Inertia::render('Dashboard/Feedback', [
            'feedbacks' => $feedbacks
        ]);
    }

    public function store(Request $request)
    {
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

    public function updateStatus(Request $request, Feedback $feedback)
    {

        $request->validate([
            'status' => ['required', Rule::in(['pending', 'in_review', 'approved', 'rejected'])],
        ]);
    
        $feedback->update(['status' => $request->status]);

        return back()->with('success', '¡Estado actualizado correctamente!');
    }

    public function show($id)
    {
        $feedback = Feedback::findOrFail($id);

        return Inertia::render('Dashboard/FeedbackShow', [
            'feedback' => $feedback
        ]);
    }

    public function destroy($id){
        $feedback = Feedback::findOrFail($id);
        $feedback->delete();

        return redirect()->back()->with('success', 'Feedback eliminado correctamente!');
    }
}
