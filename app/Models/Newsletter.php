<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Newsletter extends Model
{
    use HasFactory;

    protected $table = 'newsletter'; // Asegúrate de que sea 'newsletters'
    protected $fillable = ['email'];
}
