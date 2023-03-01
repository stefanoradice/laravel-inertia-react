import React from 'react'
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PostForm } from './Partials/PostForm';
import PostTable from './Partials/PostTable';

const index = ({ auth, ...props }) => {
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> <Link
        href={route("posts.index")}
        className=""
      >
        Posts
      </Link>
        <span className=""> / </span>
        Create</h2>}
    >
      <Head title="Post" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <PostForm />
          </div>
          <PostTable posts={props.posts} />


        </div>
      </div>
    </AuthenticatedLayout>

  )
}

export default index
