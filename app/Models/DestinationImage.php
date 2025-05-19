<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DestinationImage extends Model
{
    //
    protected $table = 'destinations_images'; // Use the actual table name
    protected $fillable = [
        'destination_id',
        'path',
    ];

    public function destinationPost()
    {
        return $this->belongsTo(Destination::class);
    }
}
