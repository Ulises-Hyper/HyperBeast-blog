<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Str;
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

    public function store(Request $request)
    {

        // Validamos los datos
        $request->validate([
            'content' => 'required',
            'excerpt' => 'required|max:255',
            'image' => 'nullable|image',
            'status' => 'required',
            // 'schedule_date' => 'nullable|date',
            'tags' => 'nullable',
            'categories' => 'nullable',
        ]);

        // Decodificamos el JSON del contenido
        $content = json_decode($request->input('content'), true);

        $title = null;

        // Recorremos el JSON y guardamos el título
        if (isset($content['blocks'])) {
            foreach ($content['blocks'] as $block) {
                if ($block['type'] === "header" && in_array($block['data']['level'], [1, 2])) {
                    $title = $block['data']['text'];
                    break;
                }
            }
        }

        // Creamos el slug
        $slugTitle = $title ? Str::slug($title) : 'sin-titulo';
        $slug = "{$slugTitle}-" . time();

        // Guardamos la imagen con nombre único
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $slugTitle . '_' . time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('posts', $filename, 'public');
        } else {
            $path = null;
        }

        $post = Post::create([
            'user_id' => $request->user()->id,
            'title' => $title,
            'slug' => $slug,
            'content' => $request->input('content'),
            'excerpt' => $request->input('excerpt'),
            'image' => $path,
            'status' => $request->input('status'),
            // 'schedule_date' => $request->input('schedule_date'),
            'tags' => $request->input('tags'),
        ]);

        return response()->json([
            'message' => 'Post creado correctamente',
            'post' => $post,
        ]);

        // return redirect()->back()->with("Success", "Post creado correctamente");
    }

    public function destroy($id)
    {

        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->back() - with("success", "Post eliminado correctamente");
    }
}
