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

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        
        // Check if the category is active before deleting
        // If the category is active, set it to inactive
        // and then delete it
        if($category->status == 'active'){
            $category->status = 'inactive';
            $category->save();
        }

        $category->delete(); // Soft delete

        return redirect()->route('dashboard.categories.index')->with('success', 'Category deleted successfully.');
    }
}