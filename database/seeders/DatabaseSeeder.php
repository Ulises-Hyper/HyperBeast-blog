<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::create([
            'name' => 'Admin Ejemplo',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role_id' => 1,
            'avatar' => 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            'status' => 'active'
        ]);
    }
}
