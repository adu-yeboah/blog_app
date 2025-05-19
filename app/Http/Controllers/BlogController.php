<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    //Route get all data in blog
    public function index()
    {
        $posts = Blog::with('images')->where('user_id', Auth::id())->get();
        return Inertia::render('main/Blogs', [
            'posts' => $posts->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'date' => $post->date,
                    'description' => $post->description,
                    'category' => $post->category,
                    'rating' => $post->rating,
                    'location' => $post->location,
                    'images' => $post->images->pluck('path'),
                ];
            }),
        ]);
    }


    // create a blog data
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|string|max:50',
            'description' => 'required|string',
            'category' => 'required|string',
            'rating' => 'required|numeric|min:0|max:5',
            'location' => 'required|string|max:255',
            'images' => 'required|array|min:1',
            'images.*' => 'file|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        $post = Blog::create([
            'title' => $validated['title'],
            'date' => $validated['date'],
            'description' => $validated['description'],
            'category' => $validated['category'],
            'rating' => $validated['rating'],
            'location' => $validated['location'],
            'user_id' => Auth::id(),
        ]);

        foreach ($validated['images'] as $image) {
            $path = $image->store('blog_images', 'public');
            BlogImage::create([
                'user_id' => Auth::id(),
                'blog_id' => $post->id,
                'path' => $path,
            ]);
        }

        return redirect()->route('blog.index')->with('success', 'Blog post created successfully!');
    }

    // Show a specific blog post
    public function show(Blog $blog)
    {
        return Inertia::render('Main/Blog', [
            'post' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'date' => $blog->date,
                'description' => $blog->description,
                'category' => $blog->category,
                'rating' => $blog->rating,
                'location' => $blog->location,
                'images' => $blog->images->pluck('path'),
            ],
        ]);
    }

    // Update a blog post
    public function edit(Blog $blog)
    {
        return Inertia::render('main/Blog', [
            'post' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'date' => $blog->date,
                'description' => $blog->description,
                'category' => $blog->category,
                'rating' => $blog->rating,
                'location' => $blog->location,
                'images' => $blog->images->pluck('path'),
            ],
        ]);
    }


    // Update a blog post
    public function update(Request $request, Blog $blog)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|string|max:50',
            'description' => 'required|string',
            'category' => 'required|string|in:History,Wildlife,Nature,Culture',
            'rating' => 'required|numeric|min:0|max:5',
            'location' => 'required|string|max:255',
            'images' => 'sometimes|array',
            'images.*' => 'file|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $blog->update([
            'title' => $validated['title'],
            'date' => $validated['date'],
            'description' => $validated['description'],
            'category' => $validated['category'],
            'rating' => $validated['rating'],
            'location' => $validated['location'],
        ]);

        // Handle new images if provided
        if ($request->hasFile('images')) {
            // Optionally delete old images
            foreach ($blog->images as $image) {
                Storage::disk('public')->delete($image->path);
                $image->delete();
            }

            // Store new images
            foreach ($validated['images'] as $image) {
                $path = $image->store('blog_images', 'public');
                BlogImage::create([
                    'blog_post_id' => $blog->id,
                    'path' => $path,
                ]);
            }
        }

        return redirect()->route('blog.index')->with('success', 'Blog post updated successfully!');
    }


    // Delete a blog post
    public function destroy(Blog $blog)
    {
        foreach ($blog->images as $image) {
            Storage::disk('public')->delete($image->path);
            $image->delete();
        }

        $blog->delete();

        return redirect()->route('blog.index')->with('success', 'Blog post deleted successfully!');
    }
}