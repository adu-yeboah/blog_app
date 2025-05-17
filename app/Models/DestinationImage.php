<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DestinationImage extends Model
{
    //
    protected $fillable = [
        'destination_id',
        'path',
    ];

    public function blogPost()
    {
        return $this->belongsTo(Destination::class);
    }
}
