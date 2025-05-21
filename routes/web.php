<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilsController;
use App\Models\Blog;
use App\Models\Destination;
use App\Models\Message;
use App\Models\Utils;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// inertia::get('/', function () {
//     return view('welcome');
// });



// Admin Routes
Route::prefix("admin")->middleware("auth")->group(function () {
    Route::get("/dashboard", function () {
        return Inertia::render("admin/Dashboard");
    });
    Route::get("/blog", function () {
        $blogs = Blog::get();
        return Inertia::render("admin/Blogs", ["blogs" => $blogs]);
    });
    Route::get("/blog/add", function () {
        return Inertia::render("admin/Blog");
    });
    Route::get("/blog/{id}", function (Blog $blog) {
        return Inertia::render("admin/Blog", ["blog" => $blog]);
    });
    Route::get("/destination", function () {
        $destination = Destination::get();
        return Inertia::render("admin/Destinations", ['destinations' => $destination]);
    });
    Route::get("/destination/add", function () {
        return Inertia::render("admin/Destination");
    });
    Route::get("/message", function () {
        $message = Message::get();
        return Inertia::render("admin/Messages", ['messages' => $message]);
    });
    
    Route::get("/utils", function () {
        $utils = Utils::latest()->get();
        return Inertia::render("admin/Utils", ['utils' => $utils]);
    });
    Route::get('/newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');
    Route::post('/newsletter/send', [NewsletterController::class, 'send'])->name('newsletter.send');
});

Route::get("/", function () {
    return Inertia::render("main/Home", [
        "message" => "hello",
    ]);
});

Route::get("/gallery", function () {
    return Inertia::render("main/Gallery");
});

Route::get("/contact", function () {
    return Inertia::render("main/Contact");
});

// Authentication Routes
Route::prefix("auth")->group(function () {
    Route::get("/login", [UserController::class, "index"])->name("auth.index");
    Route::post("/login", [UserController::class, "store"])->name("auth.store");
    Route::post("/logout", [UserController::class, "destory"])->name("auth.destory");
});


// message routes
Route::prefix("message")->group(function () {
    Route::get("/", [MessageController::class, "index"])->name("message.index");
    Route::post("/create", [MessageController::class, "store"])->name("message.store");
    Route::get("/{id}", [MessageController::class, "show"])->name("message.show");
});

// blog routes
Route::prefix("blog")->group(function () {
    Route::get("/", [BlogController::class, "index"])->name("blog.index");
    Route::post("/create", [BlogController::class, "store"])->name("blog.store");
    Route::get("/{id}", [BlogController::class, "show"])->name("blog.show");
    Route::put("/{id}", [BlogController::class, "update"])->name("blog.update");
    // Route::delete("/{id}", [BlogController::class, "destory"])->name("blog.store");
    Route::delete('/bulk', [BlogController::class, 'bulkDestroy'])->name('blog.bulkDestroy');
});

//
Route::prefix("destination")->group(function () {
    Route::get("/", [DestinationController::class, "index"])->name("destination.index");
    Route::post("/create", [DestinationController::class, "store"])->name("destination.store");
    Route::get("/{id}", [DestinationController::class, "show"])->name("destination.show");
    Route::put("/{id}", [DestinationController::class, "update"])->name("destination.update");
    Route::delete('/bulk', [DestinationController::class, 'bulkDestroy'])->name('destination.bulkDestroy');
});


// Utils Routes
Route::prefix("utils")->group(function () {
    Route::post("/store", [UtilsController::class, "store"])->name("utils.store");
});

// Newsletter Routes
Route::get('/newsletter/subscribe', [NewsletterController::class, 'subscribeForm'])->name('newsletter.subscribe.form');
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/newsletter/verify/{hash}', [NewsletterController::class, 'verify'])->name('newsletter.verify');
Route::get('/newsletter/unsubscribe/{hash}', [NewsletterController::class, 'unsubscribe'])->name('newsletter.unsubscribe');
