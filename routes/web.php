<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;


Route::get("/", function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'flash' => session('success'),
    ]);
})->name('index');

Route::post('/newsletter', [NewsletterController::class, 'store']);

Route::get("/ctf", function () {
    return Inertia::render('Articles');
});

Route::get("/article", function () {
    return Inertia::render('Article');
});

Route::get("/feedback", function () {
    return Inertia::render('Feedback');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/userprofile', function () {
    return Inertia::render('Profile');
});


Route::prefix('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    
    // Grupo para usuarios dentro de /dashboard
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('dashboard.users.index');
        Route::post('/', [UserController::class, 'store'])->name('dashboard.users.store');
        Route::delete('/{id}', [UserController::class, 'destroy'])->name('dashboard.users.destroy');
        Route::get('/{id}/edit', [UserController::class, 'edit'])->name('dashboard.users.edit');
    });
});
    
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
