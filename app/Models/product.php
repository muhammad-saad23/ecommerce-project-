<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class product extends Model
{
    use HasFactory;

    protected $table='product';
    protected $primaryKey='id';

    public function category(){
        return $this->belongsTo(category::class);
    }
}
