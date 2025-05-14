<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// inertia::get('/', function () {
//     return view('welcome');
// });


Route::get("/", function () {
    return Inertia::render("main/Home", [
        "message" => "hello",
    ]);
});

Route::get("/gallery", function() {
    return Inertia::render("main/Gallery");
});


Route::get("/contact", function() {
    return Inertia::render("main/Contact");
});


// message routes
Route::prefix("message")->group(function () {
    Route::get("/", [MessageController::class, "index"])->name("message.index");
    Route::post("/create", [MessageController::class, "store"])->name("message.store");
    Route::get("/{id}", [MessageController::class, "show"])->name("message.show");
    Route::put("/{id}", [MessageController::class, "update"])->name("message.update");
    Route::delete("/{id}", [MessageController::class, "destory"])->name("blog.store");
});

// blog routes
Route::prefix("blog")->group(function () {
    Route::get("/", [BlogController::class, "index"])->name("blog.index");
    Route::post("/create", [BlogController::class, "store"])->name("blog.store");
    Route::get("/{id}", [BlogController::class, "show"])->name("blog.show");
    Route::put("/{id}", [BlogController::class, "update"])->name("blog.update");
    Route::delete("/{id}", [BlogController::class, "destory"])->name("blog.store");
});
