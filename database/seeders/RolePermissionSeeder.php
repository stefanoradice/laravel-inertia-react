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
        $rolesPermissions = ['view-roles', 'create-roles', 'edit-roles', 'delete-roles'];
        $permissionsPermissions = ['view-permissions', 'create-permissions', 'edit-permissions', 'delete-permissions'];
        $userPostPermissions = ['view-posts', 'create-posts', 'edit-posts', 'delete-posts'];
        $allPostPermissions = ['view-others-posts', 'edit-others-posts', 'delete-others-posts'];
        $userPermissions = ['view-users', 'create-users', 'edit-users', 'delete-users'];

        foreach ($roles as $role) {
            switch ($role) {
                case 'Administrator':
                    $permissions = array_merge($rolesPermissions, $permissionsPermissions, $userPostPermissions, $allPostPermissions, $userPermissions);
                    break;

                case 'Editor':
                    $permissions = array_merge($userPermissions);
                    break;
            }
            $this->addRolePermission($permissions, $role);
        }
    }
}
