<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::factory()->create([
            'id' => 2, // Asegurar que tenga el ID 2
            'name' => 'admin',
            'email' => 'admin@hyperbeast.es',
            'username' => 'admin',
            'password' => Hash::make('12345678'),
            'role_id' => 1, // Asegúrate de que coincide con los roles creados
            'status' => 'active',
        ]);
    }
}
