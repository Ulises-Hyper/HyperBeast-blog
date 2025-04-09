<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        
        return Inertia::render('Dashboard/Category', [
            'categories' => $categories,
        ]);
    }
}