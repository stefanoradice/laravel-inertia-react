<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{

    public function addRolePermission($permissions, $role)
    {
        foreach ($permissions as $permission) {
            RolePermission::create([
                'role_id' => Role::where('name', $role)->first()->id,
                'permission_id' => Permission::where('name', $permission)->first()->id
            ]);
        }
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $roles = ['Administrator', 'Editor'];
        $userPostPermissions = ['view-post', 'create-post', 'edit-post', 'delete-post'];
        $allPostPermissions = ['view-others-post', 'edit-others-post', 'delete-others-post'];
        $userPermissions = ['view-user', 'create-user', 'edit-user', 'delete-user'];

        foreach ($roles as $role) {
            switch ($role) {
                case 'Administrator':
                    $permissions = array_merge($userPostPermissions, $allPostPermissions, $userPermissions);
                    break;

                case 'Editor':
                    $permissions = array_merge($userPermissions);
                    break;
            }
            $this->addRolePermission($permissions, $role);
        }
    }
}
