<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //
    public function index()
    {
        $message = Message::all();
        return $message;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => "string",
            "subject" => "string",
            "email" => "email",
        ]);

        $message = Message::create([
            "title" => $validated['title'],
            "subject" => $validated['subject'],
            "email" => $validated['email'],

        ]);

        return $message->with("succes", "message sent");
    }
}
