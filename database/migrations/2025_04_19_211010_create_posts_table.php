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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
        
            // Relación con usuarios
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
        
            // Contenido principal
            $table->string('title');
            $table->string('slug')->unique();
            $table->json('content');
        
            // Opcional para previews
            $table->text('excerpt')->nullable();
        
            // Imagen de portada
            $table->string('image')->nullable();
        
            // Estado (draft, upcoming, published, archived)
            $table->string('status')->default('draft');
        
            // Fecha programada de publicación
            $table->timestamp('published_at')->nullable();
        
            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('canonical_url')->nullable();
        
            // Funcionalidades adicionales
            $table->unsignedBigInteger('views_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_pinned')->default(false); // útil para mostrar fijo
        
            // Timestamps y soft deletes
            $table->timestamps();
            $table->softDeletes();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
