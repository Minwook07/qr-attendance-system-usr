import './App.css';
import { AttendanceContent } from './features/attendance/components/AttendanceContent';
import { Dashboard } from './features/dashboard/components/Dashboard';
import { Sidebar } from './layouts/Sidebar';
import { useState } from 'react';
import { Setting } from './features/setting/components/Setting';
import { UserContent } from './features/users/components/UserContent';
import { users } from './features/users/utils/user-data';
import { ComingSoon } from './components/coming-soon-page';
import { LogoutModal } from './features/auth/components/LogoutModal'

function App() {
    const [logoutOpen, setLogoutOpen] = useState(false)
    const [activePage, setActivePage] = useState("Dashboard");

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
            <div className="lg:ml-64 pt-16 lg:pt-0">
                <Sidebar activePage={activePage} setActivePage={setActivePage} openLogoutModal={() => setLogoutOpen(true)}/>
                <LogoutModal
                    isOpen={logoutOpen}
                    onClose={() => setLogoutOpen(false)}
                    onLogout={() => console.log("Logout clicked")}
                    setActivePage={setActivePage}
                />
                <div className="p-6">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default App;
