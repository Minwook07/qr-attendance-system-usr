'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { settings } from '../utils/setting'
import {
    faBarsStaggered,
    faXmark,
    faGaugeHigh,
    faCalendarCheck,
    faQrcode,
    faUsers,
    faGear,
    faUser,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

const menu = [
    {
        title: "MAIN",
        items: [
            { name: 'Dashboard', icon: faGaugeHigh },
            { name: 'Attendance', icon: faCalendarCheck },
        ]
    },
    {
        title: "MANAGEMENT",
        items: [
            { name: 'QR', icon: faQrcode },
            { name: 'Users', icon: faUsers },
        ]
    },
    {
        title: "SITE",
        items: [
            { name: 'Settings', icon: faGear },
            { name: 'Profile', icon: faUser },
            { name: 'Log out', icon: faRightFromBracket },
        ]
    }
]


export function Sidebar({ activePage, setActivePage, openLogoutModal, sidebarOpen }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const setting = settings[0]

    return (
        <>
            <div className={`hidden lg:flex flex-col h-screen bg-gray-900 text-white fixed left-0 top-0 pt-6 transition-all duration-300 overflow-hidden
                ${sidebarOpen ? 'w-64' : 'w-0'}`}
            >
                <div className="px-6 mb-10 min-w-[16rem] flex items-center">
                    <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        alt=""
                        className="h-10 w-auto me-2 select-none pointer-events-none"
                    />
                    <span className='text-2xl font-medium text-purple-600'>{setting.sysname}</span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 px-4 min-w-[16rem]:">
                    {menu.map((group) => (
                        <div key={group.title}>
                            <p className="text-gray-400 text-xs mb-2 tracking-widest">{group.title}</p>

                            {group.items.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        if (item.name == 'Log out') {
                                            openLogoutModal()
                                        } else {
                                            setActivePage(item.name)
                                        }
                                    }}
                                    className={`
                                        flex items-center gap-3 text-left px-4 py-2 hover:bg-gray-800 rounded-md w-full font-medium
                                        ${activePage === item.name ? 'bg-gray-700' : 'hover:bg-gray-700'}
                                    `}
                                >
                                    {item.icon && <FontAwesomeIcon icon={item.icon} className="w-4" />}
                                    {item.name}
                                </button>

                            ))}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white flex justify-between items-center p-4 z-50">
                <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                    className="h-8 w-auto"
                />

                <button onClick={() => setMobileMenuOpen(true)} className="p-2">
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
                    <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 text-white p-6">

                        {/* Close */}
                        <div className="flex justify-between items-center mb-8">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt=""
                                className="h-8 w-auto"
                            />
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* NAV */}
                        <nav className="flex flex-col gap-6">
                            {menu.map((group) => (
                                <div key={group.title}>
                                    <p className="text-gray-400 text-xs mb-2 tracking-widest">{group.title}</p>

                                    {group.items.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                if (item.name == 'Log out') {
                                                    openLogoutModal()
                                                } else {
                                                    setActivePage(item.name)
                                                }
                                                setMobileMenuOpen(false)
                                            }}
                                            className="text-left px-4 py-2 w-full hover:bg-gray-800 rounded-md"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
