'use client'

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export function Navbar({toggleSidebar}) {

    return (
        <>

            <div className="hidden lg:flex fixed top-0 right-0 bg-gray-900 text-white justify-between items-center p-4 z-40 lg:left-64">
                <button onClick={toggleSidebar} className="p-2">
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </button>
                <div>
                    hiiii
                </div>
            </div>
        </>
    )
}
