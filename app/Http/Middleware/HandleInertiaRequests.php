<?php

namespace App\Http\Middleware;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $roles = $request->user() ? $request->user()->roles : null;
        $permissions =  $roles && array_unique(Arr::pluck(Arr::collapse(Role::whereIn('roles.id', $roles->pluck('id'))->with('permissions')->get()->pluck('permissions')->toArray()), 'name'));


        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'roles' => $roles ? $roles->pluck('name') : '',
                'permissions' => $permissions
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
