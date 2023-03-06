import { useForm } from "@inertiajs/react";
import React, { useRef } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextareaInput from '@/Components/TextareaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from "@headlessui/react";
import MediaLibrary from "@/Components/MediaLibrary";

export function PostForm(props) {
  const form = useRef();
  const currentPost = props.post && props.post;

  const { data, setData, errors, post, put, processing, recentlySuccessful } = useForm({
    title: currentPost && currentPost.title ? currentPost.title : "",
    description: currentPost && currentPost.description ? currentPost.description : "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    currentPost ? put(route("posts.update", currentPost)) : post(route("posts.store"), { preserveState: false })
  }

  return <form name="createForm" onSubmit={handleSubmit} ref={form}>
    <div className="flex flex-col">
      <div className="mb-4">
        <InputLabel htmlFor="title" value="Title" />
        <TextInput id="title" className="mt-1 block w-full" value={data.title} onChange={e => setData('title', e.target.value)} required isFocused />
        <InputError className="mt-2" message={errors.title} />
      </div>
      <div className="mb-0">
        <InputLabel htmlFor="description" value="Description" />
        <TextareaInput id="description" className="mt-1 block w-full" value={data.description} onChange={e => setData('description', e.target.value)} required />
        <InputError className="mt-2" message={errors.description} />
      </div>
      <div className="mb-0">
        <InputLabel htmlFor="image" value="Image" />
        <MediaLibrary />
        <InputError className="mt-2" message={errors.description} />
      </div>
    </div>
    <div className="flex items-center gap-4 mt-4">
      <PrimaryButton disabled={processing}>Save</PrimaryButton>
      <Transition
        show={recentlySuccessful}
        enterFrom="opacity-0"
        leaveTo="opacity-0"
        className="transition ease-in-out"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
      </Transition>
    </div>
  </form>;
}
