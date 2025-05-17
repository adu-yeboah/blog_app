<?php

namespace App\Http\Controllers;

use App\Models\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UtilsController extends Controller
{
    //
    public function update(Request $request, Utils $utils)
    {
        $validated = $request->validate([
            "about" => "string",
            "phone" => "string",
            "location" => "string",
            "number" => "string",
            "linkedin" => "string",
            "instagram" => "string",
            "twitter" => "string",
            "image" => "file|image|mimes:jpeg,png,jpg|max:2048",
        ]);

        // Filter out null or empty values (except for image, which is handled separately)
        $updateData = array_filter($validated, function ($value, $key) {
            return $key !== 'image' && !is_null($value) && $value !== '';
        }, ARRAY_FILTER_USE_BOTH);

        // Handle image upload if provided
        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($utils->image) {
                Storage::disk('public')->delete($utils->image);
            }
            // Store new image
            $updateData['image'] = $request->file('image')->store('cover_images', 'public');
        }

        // Update only the provided fields
        $utils->update($updateData);

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }
}
