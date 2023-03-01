import { PostForm } from './Partials/PostForm';
import React from 'react'
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Create = ({ auth, post }) => {
  return (
    <AuthenticatedLayout
      auth={auth}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> <Link
        href={route("posts.index")}
      >
        Posts
      </Link>
        <span> / </span>
        Create</h2>}
    >
      <Head title="Post" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <PostForm post={post} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Create
