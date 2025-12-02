'use client'

import { faArrowRightFromBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export function Navbar({ toggleSidebar }) {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownItem = [
        { name: 'Your profile', icon: faUser },
        { name: 'Settings', icon: faGear },
        { name: 'Sign out', icon: faArrowRightFromBracket }
    ]
    return (
        <>
            <div className="hidden lg:flex fixed top-0 right-0 bg-gray-900 text-white justify-between items-center p-4 z-40 lg:left-64">
                <button onClick={toggleSidebar} className="p-2">
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </button>
                <div className="relative ml-3">
                    <div className="relative cursor-pointer flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 p-0"
                        onClick={() => setIsOpen(!isOpen)}>
                        <img
                            alt="pf-avatar"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                        />
                    </div>

                    <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 transition-all duration-200
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}>
                        {dropdownItem.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 hover:bg-white/10"
                            >
                                <FontAwesomeIcon icon={item.icon} className='me-2' />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
