<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'slug', 'description', 'image', 'status'];

    public function entries(): BelongsToMany
    {
        return $this->belongsToMany(Entry::class);
    }
}
