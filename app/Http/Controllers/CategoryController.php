<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Category;
use Exception;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Dashboard/Category', [
            'categories' => $categories,
        ]);
    }

    public function edit ($id){
        $category = Category::findOrFail($id);

        return Inertia::render('Dashboard/EditCategory',[
            'category' => $category,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $category = Category::findOrFail($id);

            $data = $request->validate([
                'name' => 'required|string|max:255',
                'slug' => 'required|string|max:255',
                'description' => 'nullable|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
                'status' => 'required|in:active,inactive',
            ]);

            if ($request->hasFile('image') && $request->file('image')->isValid()) {
                $file = $request->file('image');
                $filename = time() . '_' . $file->getClientOriginalName();
            
                $file->move(public_path('images/categories'), $filename);
                $data['image'] = '/images/categories/' . $filename;
            }

            $category->update($data);

            return redirect()->route('dashboard.categories.index')->with('success', 'Category updated successfully.');
        } catch (\Throwable $e) {
            Log::error('Error updating category', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return redirect()->route('dashboard.categories.index')->with('error', 'Failed to update category.');
        }
    }


    public function store(Request $request)
    {
        try {
            $category = $request->validate([
                'name' => 'required|string|max:255',
                'slug' => 'required|string|max:255',
                'description' => 'nullable|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
                'status' => 'required|in:active,inactive',
            ]);

            if ($request->hasFile('image') && $request->file('image')->isValid()) {
                $file = $request->file('image');
                $filename = time() . '_' . $file->getClientOriginalName();
            
                $file->move(public_path('images/categories'), $filename);
                $category['image'] = '/images/categories/' . $filename;
            }            

            Category::create($category);

            return redirect()->route('dashboard.categories.index')->with('success', 'Category created successfully.');
        } catch (\Throwable $e) {
            Log::error('Error creating category', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return redirect()->route('dashboard.categories.index')->with('error', 'Failed to create category.');
        }
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        // Check if the category is active before deleting
        // If the category is active, set it to inactive
        // and then delete it
        if ($category->status == 'active') {
            $category->status = 'inactive';
            $category->save();
        }

        $category->delete(); // Soft delete

        return redirect()->route('dashboard.categories.index')->with('success', 'Category deleted successfully.');
    }
}