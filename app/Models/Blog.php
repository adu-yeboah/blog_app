<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Blog extends Model
{
    //
     protected $fillable = [
        'title',
        'date',
        'description',
        'category',
        'rating',
        'location',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(BlogImage::class);
    }
}
