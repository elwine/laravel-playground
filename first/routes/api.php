<?php

use App\Http\Controllers\API\CompanyAPI;
use App\Http\Controllers\API\UserAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('users', UserAPI::class);
Route::apiResource('companies', CompanyAPI::class);
