import './App.css';
import { AttendanceContent } from './pages/attendance/AttendanceContent';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Sidebar } from './layouts/Sidebar';
import { useState } from 'react';
import { Setting } from './pages/settings/Setting';
import { UserContent } from './pages/users/UserContent';
import { users } from './features/users/utils/user-data';

function App() {
    const [activePage, setActivePage] = useState("Dashboard");

    return (
        <div>
            <div className="lg:ml-64 pt-16 lg:pt-0">
                <Sidebar activePage={activePage} setActivePage={setActivePage} />
                <div className="p-6">
                    {activePage === "Dashboard" && <Dashboard />}
                    {activePage === "Attendance" && <AttendanceContent />}
                    {activePage === "QR" && <h1 className="text-2xl">QR Content</h1>}
                    {activePage === "Users" && <UserContent data={users} />}
                    {activePage === "Settings" && <Setting />}
                </div>
            </div>
        </div>
    );
}

export default App;
