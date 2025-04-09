<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            $table->softDeletes();
        });

        // Tabla pivote para la relación muchos a muchos con entries
        Schema::create('category_entry', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->foreignId('entry_id')->constrained()->onDelete('cascade');
            $table->primary(['category_id', 'entry_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_entry');
        Schema::dropIfExists('categories');
    }
};