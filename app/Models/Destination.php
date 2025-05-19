<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    protected $fillable = [
        'title',
        'description',
        'rating',
        'location',
    ];

     public function images(): HasMany
    {
        return $this->hasMany(DestinationImage::class);
    }
}
