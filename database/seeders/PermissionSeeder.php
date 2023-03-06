<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'view-users',
            'create-users',
            'edit-users',
            'delete-users',
            'view-roles',
            'create-roles',
            'edit-roles',
            'delete-roles',
            'view-permissions',
            'create-permissions',
            'edit-permissions',
            'delete-permissions',
            'view-posts',
            'view-others-posts',
            'create-posts',
            'edit-posts',
            'edit-others-posts',
            'delete-posts',
            'delete-others-posts'
        ];

        foreach ($permissions as $permission) {
            Permission::Create([
                'name' => $permission
            ]);
        }
    }
}
