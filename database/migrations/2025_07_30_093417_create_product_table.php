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
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->integer('product_price');
            $table->foreignId('category_id')->references('id')->on('category')->onDelete('cascade');
            $table->string('product_description');
            $table->string('product_image');
            $table->string('product_stock');
            $table->timestamps();
        });

        Schema::table('product', function (Blueprint $table) {
            $table->text('product_description')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            $table->string('product_description', 255)->change(); // revert if needed
        });
    }
};
