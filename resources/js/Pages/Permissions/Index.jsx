import React from 'react'
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PermissionsTable from './Partials/PermissionTable';
import { PermissionForm } from './Partials/PermissionForm';

const index = ({ auth, ...props }) => {
  console.log(auth)
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> <Link
        href={route("permissions.index")}
        className=""
      >
        Permissions
      </Link>
      </h2>}
    >
      <Head title="Permissions" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          {
            auth.permissions.includes('create-permission') &&
            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <PermissionForm />
            </div>
          }
          <PermissionsTable permissions={props.permissions} />


        </div>
      </div>
    </AuthenticatedLayout>

  )
}

export default index
