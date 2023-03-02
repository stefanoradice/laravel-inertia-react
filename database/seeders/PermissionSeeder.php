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
        $permissions = ['view-user', 'create-user', 'edit-user', 'delete-user', 'view-post', 'view-others-post', 'create-post', 'edit-post', 'edit-others-post', 'delete-post', 'delete-others-post'];

        foreach ($permissions as $permission) {
            Permission::Create([
                'name' => $permission
            ]);
        }
    }
}
