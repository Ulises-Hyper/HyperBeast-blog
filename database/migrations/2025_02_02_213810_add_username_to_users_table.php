<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/YYYY_MM_DD_HHMMSS_add_username_to_users_table.php
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')
                ->nullable() // Permitir valores nulos temporalmente
                ->after('email');
        });

        // Actualizar los usuarios existentes
        User::whereNull('username')->each(function ($user) {
            $user->username = Str::slug($user->name . '-' . uniqid()); // Generar username único
            $user->save();
        });

        // Añadir restricción única después de actualizar
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')
                ->unique()
                ->nullable(false) // Hacer obligatorio
                ->change();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique('users_username_unique');
            $table->dropColumn('username');
        });
    }
};
