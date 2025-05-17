<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogImage extends Model
{
    //
     protected $fillable = [
        'blog_post_id',
        'path',
    ];

     public function blogPost()
    {
        return $this->belongsTo(Blog::class);
    }
}
