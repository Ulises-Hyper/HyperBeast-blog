<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    public function role()
    {
        return $this->belongsTo(Role::class);
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = ['name', 'email', 'username', 'avatar', 'status', 'password', 'role_id'];


    // Scope para filtrar por estado
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeInactive($query)
    {
        return $query->where('status', 'inactive');
    }

    // Accesor para mostrar el estado formateado
    public function getStatusBadgeAttribute()
    {
        return $this->status === 'active' 
            ? '<span class="badge badge-success">Activo</span>'
            : '<span class="badge badge-danger">Inactivo</span>';
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            if (!$user->role_id) {
                $user->role_id = 3; // ID del rol por defecto (por ejemplo, 'User')
            }
        });
    }
}
