import './App.css';
import { AttendanceContent } from './components/AttendanceContent';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/layouts/Sidebar';
import { useState } from 'react';
import { Setting } from './components/Setting';

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
                    {activePage === "Users" && <h1 className="text-2xl">Users Content</h1>}
                    {activePage === "Settings" && <Setting />}
                </div>
            </div>
        </div>
    );
}

export default App;
