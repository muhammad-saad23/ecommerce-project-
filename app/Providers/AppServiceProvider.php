<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'flash' => function () {
                return [
                    'message' => Session::get('message'),
                    'error'   => Session::get('error'),
                ];
            },
        ]);
        Inertia::share([
            'auth' => [
                'user' => Session::get('user') // or whatever you're storing
            ],            
        ]);
        Vite::prefetch(concurrency: 3);
    }
}
