<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //show login
    public function index()
    {
        return inertia("admin/auth/Login");
    }

    // Login in User
    public function store(Request $request)
    {
        $credentails = $request->validate([
            "username" => ["required", "string"],
            "password" => ["required", "string"]
        ]);

        if (Auth::attempt($credentails)) {
            $request->session()->regenerate();
            return inertia("admin/Dashboard");
        };

        return back()->withErrors([
            'username' => 'The provided credentials do not match our records.',
        ])->onlyInput('username');
    }


    // Logout User

    public function destory(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
