<?php

use App\Http\Resources\MediaResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Media;
use App\Models\Permission;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function () {
    Route::get('posts', function ($paginate = 10) {
        return PostResource::collection(Post::latest()->paginate(Request::get('paginate') ?: $paginate));
    });
    Route::get('users', function ($paginate = 10) {
        return UserResource::collection(User::latest()->paginate(Request::get('paginate') ?: $paginate));
    });
    Route::get('permissions', function ($paginate = 10) {
        return PermissionResource::collection(Permission::latest()->paginate(Request::get('paginate') ?: $paginate));
    });
    Route::get('media', function ($paginate = 10) {
        return MediaResource::collection(Media::latest()->paginate(Request::get('paginate') ?: $paginate));
    });
});
