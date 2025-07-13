<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;

class PublicPostController extends Controller
{
    public function index()
    {

        $posts = Post::where('status', 'published')
            ->with('user')
            ->orderByDesc('published_at')
            ->paginate(10)
            ->through(fn($post) => [
                'id' => $post->id,
                'username' => $post->user->username,
                'title' => $post->title,
                'slug' => $post->slug,
                'excerpt' => $post->excerpt,
                'image' => $post->image,
                'views_count' => $post->views_count,
                'is_featured' => $post->is_featured,
                'is_pinned' => $post->is_pinned,
                'published_at' => $post->published_at
            ]);


        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function show($username, $slug)
    {
        $user = User::where('username', $username)->firstOrFail();

        $post = Post::where('slug', $slug)
            ->where('user_id', $user->id)
            ->where('status', 'published')
            ->with('user')
            ->firstOrFail();

        return Inertia::render('Posts/Show', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'image' => $post->image,
                'content' => json_decode($post->content) ?? ['blocks' => []],
                'published_at' => $post->published_at,
                'user' => [
                    'username' => $post->user->username,
                    'name' => $post->user->name,
                    'avatar' => $post->user->avatar,
                    'description' => $post->user->description,
                    'created_at' => $post->user->created_at
                ]
            ]
        ]);
    }
}
