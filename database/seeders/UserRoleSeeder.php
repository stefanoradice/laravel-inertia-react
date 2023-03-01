<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = Role::all()->pluck('id');
        foreach (User::all() as $user) {
            UserRole::create(
                [
                    'user_id' => $user->id,
                    'role_id' => $roles->random()
                ]
            );
        }
    }
}
