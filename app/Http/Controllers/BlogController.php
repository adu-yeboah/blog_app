<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    //Route get all data in blog
    public function index()
    {
        // $blog = Blog::all();
        return inertia("main/Blogs");
    }
}
