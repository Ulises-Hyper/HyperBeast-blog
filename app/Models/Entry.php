<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Entry extends Model
{
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
