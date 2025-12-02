import './App.css';
import { AttendanceContent } from './features/attendance/components/AttendanceContent';
import { Dashboard } from './features/dashboard/components/Dashboard';
import { Sidebar } from './layouts/Sidebar';
import { Navbar } from './layouts/Header';
import { useState } from 'react';
import { Setting } from './features/setting/components/Setting';
import { UserContent } from './features/users/components/UserContent';
import { users } from './features/users/utils/user-data';
import { ComingSoon } from './components/coming-soon-page';
import { LogoutModal } from './features/auth/components/LogoutModal'
import { Footer } from './layouts/Footer';

function App() {
    const [logoutOpen, setLogoutOpen] = useState(false)
    const [activePage, setActivePage] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const renderPage = () => {
        switch (activePage) {
            case "Dashboard":
                return <Dashboard />
            case "Attendance":
                return <AttendanceContent />
            case "Users":
                return <UserContent data={users} />
            case "Settings":
                return <Setting />
            default:
                return <ComingSoon setActivePage={setActivePage} />
        }
    }

    return (
        <div>
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                openLogoutModal={() => setLogoutOpen(true)}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <LogoutModal
                isOpen={logoutOpen}s
                onClose={() => setLogoutOpen(false)}
                onLogout={() => console.log("Logout clicked")}
                setActivePage={setActivePage}
            />
            <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
                <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} openLogoutModal={() => setLogoutOpen(true)} />
                <div className="p-6 mt-20 mb-20">
                    {renderPage()}
                </div>
                <Footer toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
            </div>
        </div>
    );
}

export default App;
