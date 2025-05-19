<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogImage extends Model
{
    //
     protected $fillable = [
        'blog_id',
        'path',
        'user_id'
    ];

     public function blogPost()
    {
        return $this->belongsTo(Blog::class);
    }
}
