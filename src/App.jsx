import './App.css';
import { AttendanceContent } from './pages/attendance/AttendanceContent';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Sidebar } from './layouts/Sidebar';
import { useState } from 'react';
import { Setting } from './pages/settings/Setting';
import { UserContent } from './pages/users/UserContent';
import { users } from './features/users/utils/user-data';
import { ComingSoon } from './components/coming-soon-page';

function App() {
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
                return <ComingSoon setActivePage={setActivePage}/>
        }
    }

    return (
        <div>
            <div className="lg:ml-64 pt-16 lg:pt-0">
                <Sidebar activePage={activePage} setActivePage={setActivePage} />
                <div className="p-6">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default App;
