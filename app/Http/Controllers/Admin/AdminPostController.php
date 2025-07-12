<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use Inertia\Inertia;

class AdminPostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();

        return Inertia::render('Dashboard/Posts/Posts', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        $categories = Category::where("status", "active")
            ->get(['id', 'name', 'slug']);
        
        $user = Auth::user()
            ->first(['id', 'username']);

        return Inertia::render('Dashboard/Posts/Create', [
            'categories' => $categories,
            'user' => $user
        ]);
    }

    public function destroy($id)
    {

        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->back() - with("success", "Post eliminado correctamente");
    }
}
