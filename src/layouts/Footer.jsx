'use client'

import { settings } from "../utils/setting"

export function Footer({ sidebarOpen }) {
    const setting = settings[0]
    return (
        <>
            <div className={`hidden lg:flex fixed bottom-0 right-0 bg-gray-900 text-white justify-between items-center p-4 z-40 transition-all duration-300 ${sidebarOpen ? 'left-64' : 'left-0'}`}>
                <div className="m-auto">
                    <p>
                        <strong>Copyright &copy; 2025 <span className='text-purple-600 hover:text-purple-600/90'><a href="">{setting.copyright}</a></span>. </strong>
                        All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}
