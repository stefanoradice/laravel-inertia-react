import { useForm } from "@inertiajs/react";
import React, { useRef } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextareaInput from '@/Components/TextareaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from "@headlessui/react";

export function UserForm(props) {
  const form = useRef();
  const currentUser = props.user && props.user;

  const { data, setData, errors, post, put, processing, recentlySuccessful } = useForm({
    name: currentUser && currentUser.name ? currentUser.name : "",
    email: currentUser && currentUser.email ? currentUser.email : "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    currentUser ? put(route("users.update", currentUser)) : post(route("users.store"), { preserveState: false })
  }

  return <form name="createForm" onSubmit={handleSubmit} ref={form}>
    <div className="flex flex-col">
      <div className="mb-4">
        <InputLabel htmlFor="name" value="Name" />
        <TextInput id="name" className="mt-1 block w-full" value={data.name} onChange={e => setData('name', e.target.value)} required isFocused />
        <InputError className="mt-2" message={errors.title} />
      </div>
      <div className="mb-0">
        <InputLabel htmlFor="email" value="Email" />
        <TextareaInput id="email" className="mt-1 block w-full" value={data.email} onChange={e => setData('email', e.target.value)} required />
        <InputError className="mt-2" message={errors.email} />
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
