import React from 'react'
import { Disclosure, Menu, Transition} from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Service", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className='top-16 right-0 fixed bg-blue-500 w-60 h-full p-10 rounded-sm z-40'>
      {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
    </div>
  )
}
