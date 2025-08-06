<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

    // Route::get('/',function (){
    //     return Inertia::render('Home')->route('home');
    // });
Route::controller(FrontendController::class)->group(function(){
    // Route::get('/navbar','navbar')->name('navbar');
    Route::get('/category/{id}','productsByCategory')->name('category.product');
    Route::get('/','home')->name('home');

    Route::middleware(['user_login'])->group(function(){
        Route::get('/user/register','register')->name('register.user');
        Route::post('/user/register','CreateRegister')->name('register.store');
        Route::get('/user/login','login')->name('login.user');
        Route::post('/user/login','CreateLogin')->name('login.store');
    });
    Route::get('/logout','logout')->name('logout.user');

    Route::get('/product','productList')->name('productList');
    Route::get('/product/detail/{id}','productDetail')->name('productDetail');
    Route::get('/product/search','search')->name('search');
    
});

Route::controller(CategoryController::class)->group(function(){
    Route::prefix('admin')->group(function(){
        Route::get('/category','category')->name('category.get');
        Route::post('/category','CreateCategory')->name('category.store');
        Route::get('/category/list','categoryList')->name('category.list');
        Route::delete('/category/delete/{id}','categoryDelete')->name('category.delete');
        Route::get('/category/edit/{id}','categoryEdit')->name('category.edit');
        Route::post('/category/update/{id}','categoryUpdate')->name('category.update');
    });
});
Route::controller(ProductController::class)->group(function(){
    Route::prefix('admin')->group(function(){
        Route::get('/product','product')->name('product.get');
        Route::post('/product','CreateProduct')->name('product.store');
        Route::get('/product/list','productList')->name('product.list');
        Route::delete('/product/delete/{id}','productDelete')->name('product.delete');
        Route::get('/product/edit/{id}','productEdit')->name('product.edit');
        Route::post('/product/update/{id}','productUpdate')->name('product.update');
        
    });
});

Route::controller(CartController::class)->group(function(){
    Route::get('/cart','cart')->name('cart');
    Route::post('/cart','CreateCart')->name('cart.store');
    Route::delete('/cart/delete/{id}','CartDelete')->name('cart.delete');
    Route::delete('/cart/clear','CartClear')->name('cart.clear');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
