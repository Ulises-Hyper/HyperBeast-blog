<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run()
    {
        // Eliminar roles existentes sin truncar la tabla
        DB::table('roles')->delete();

        // Insertar roles nuevamente
        DB::table('roles')->insertOrIgnore([
            ['id' => 1, 'name' => 'administrator'],
            ['id' => 2, 'name' => 'creator'],
            ['id' => 3, 'name' => 'reader'],
        ]);
    }
}
