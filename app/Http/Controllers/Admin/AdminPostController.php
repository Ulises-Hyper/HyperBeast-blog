<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
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
        return Inertia::render('Dashboard/Posts/Create');
    }

    public function destroy($id)
    {

        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->back() - with("success", "Post eliminado correctamente");
    }
}
