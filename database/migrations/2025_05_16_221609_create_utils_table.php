<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('utils', function (Blueprint $table) {
            $table->id();
            $table->text("about");
            $table->string("phone");
            $table->string("location");
            $table->string("number");
            $table->string("linkedin");
            $table->string("instagram");
            $table->string("twitter");
            $table->string("image");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utils');
    }
};
