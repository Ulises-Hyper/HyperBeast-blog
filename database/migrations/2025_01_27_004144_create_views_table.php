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
        Schema::create('views', function (Blueprint $table) {
            $table->id(); // Clave primaria autoincremental
            $table->foreignId('entry_id')->constrained()->onDelete('cascade'); // Referencia a la tabla 'entries'
            $table->timestamp('viewed_at')->useCurrent(); // Utilizamos el tipo 'timestamp' para registrar la hora de la vista
            $table->timestamps(); // Las columnas 'created_at' y 'updated_at'
        });
              
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('views');
    }
};
