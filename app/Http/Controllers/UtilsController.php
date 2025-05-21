<?php

namespace App\Http\Controllers;

use App\Models\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UtilsController extends Controller
{
    //
    public function store(Request $request)
    {
        $validated = $request->validate([
            "about" => "string",
            "phone" => "string",
            "location" => "string",
            "number" => "string",
            "linkedin" => "string",
            "instagram" => "string",
            "twitter" => "string",
            "coverImage" => "file|image|mimes:jpeg,png,jpg,gif|max:2048",
        ]);

        if ($request->hasFile('coverImage')) {
            $validated["coverImage"] = $request->file('coverImage')->store('cover_images', 'public');
        }

        Utils::create($validated);

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }
}
