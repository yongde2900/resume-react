import { Fragment } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { request } from "./api";

export default function MoreAction(props) {
  const resources = [
    {
      name: "Edit",
      action: props.setEditComment,
    },
    {
      name: "Delete",
      action: props.handleDelete,
    },
  ];

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {resources.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div>
                  <div>
                    <button
                      className="font-semibold text-gray-900"
                      type="button"
                      onClick={item.action}
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
