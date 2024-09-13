<?php

use App\Http\Controllers\API\CompanyAPI;
use App\Http\Controllers\API\UserAPI;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('users', UserAPI::class);
Route::apiResource('companies', CompanyAPI::class);

Route::post('/auth/login', [ AuthController::class, 'login' ]);
Route::middleware('auth:sanctum')->get('/auth/profile', [ AuthController::class, 'profile' ]);
