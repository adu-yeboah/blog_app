<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\DestinationImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DestinationController extends Controller
{

    // Display a list of destinations
    public function index()
    {
        $posts = Destination::with('images')
            ->paginate(5)
            ->withQueryString();

        $transformedPosts = $posts->getCollection()->map(function ($post) {
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
        });

        $posts->setCollection($transformedPosts);

        return Inertia::render('main/Destination', [
            'destination' => $posts,
        ]);
    }


    // Store a newly created destination
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'images' => 'required|array|min:1',
            'images.*' => 'file|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB max per image
        ]);

        // Create the destination
        $destination = Destination::create([
            'title' => $validated['title'],
            'rating' => $validated['rating'],
            'description' => $validated['description'],
            'location' => $validated['location'],
        ]);

        // Store images
        foreach ($validated['images'] as $image) {
            $path = $image->store('destination_images', 'public');
            DestinationImage::create([
                'destination_id' => $destination->id,
                'path' => $path,
            ]);
        }

        return inertia("admin/Destinations")->with('success', 'Destination created successfully!');
    }

    // Show a specific destination
    public function show(Destination $destination)
    {

        return Inertia::render('Destination/Show', [
            'destination' => [
                'id' => $destination->id,
                'title' => $destination->title,
                'rating' => $destination->rating,
                'description' => $destination->description,
                'location' => $destination->location,
                'images' => $destination->images->pluck('path'),
            ],
        ]);
    }

    // Show the form for editing a destination
    public function edit(Destination $destination)
    {
        return Inertia::render('Destination/Edit', [
            'destination' => [
                'id' => $destination->id,
                'title' => $destination->title,
                'rating' => $destination->rating,
                'description' => $destination->description,
                'location' => $destination->location,
                'images' => $destination->images->pluck('path'),
            ],
        ]);
    }

    // Update a destination
    public function update(Request $request, Destination $destination)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'rating' => 'required|numeric|min:0|max:5',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'images' => 'sometimes|array',
            'images.*' => 'file|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Update the destination
        $destination->update([
            'title' => $validated['title'],
            'rating' => $validated['rating'],
            'description' => $validated['description'],
            'location' => $validated['location'],
        ]);

        // Handle new images if provided
        if ($request->hasFile('images')) {
            // Delete old images
            foreach ($destination->images as $image) {
                Storage::disk('public')->delete($image->path);
                $image->delete();
            }

            // Store new images
            foreach ($validated['images'] as $image) {
                $path = $image->store('destination_images', 'public');
                DestinationImage::create([
                    'destination_id' => $destination->id,
                    'path' => $path,
                ]);
            }
        }

        return redirect()->route('destination.index')->with('success', 'Destination updated successfully!');
    }

    // Delete a destination
    public function destroy(Destination $destination)
    {

        // Delete associated images from storage and database
        foreach ($destination->images as $image) {
            Storage::disk('public')->delete($image->path);
            $image->delete();
        }

        $destination->delete();

        return redirect()->route('destination.index')->with('success', 'Destination deleted successfully!');
    }

    //Bluck Destory
    public function bulkDestroy(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:destinations,id',
        ]);

        try {
            // Fetch blogs with their images
            $destinations = Destination::whereIn('id', $request->ids)->with('images')->get();
            foreach ($destinations as $destination) {
                // Delete associated images
                if (!$destination->images) {
                    return null;
                }
                foreach ($destination->images as $image) {
                    Storage::disk('public')->delete($image->path);
                    $image->delete();
                }

                $destination->delete();
            }

            return ;

        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete destination posts'], 500);
        }
    }
}
