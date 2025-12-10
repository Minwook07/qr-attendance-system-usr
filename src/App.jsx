import './App.css';
import { AttendanceContent } from './features/attendance/components/AttendanceContent';
import { Dashboard } from './features/dashboard/components/Dashboard';
import { Sidebar } from './layouts/Sidebar';
import { Navbar } from './layouts/Header';
import { useEffect, useState } from 'react';
import { Setting } from './features/setting/components/Setting';
import { UserContent } from './features/users/components/UserContent';
import { users } from './features/users/utils/user-data';
import { ComingSoon } from './components/coming-soon-page';
import { LogoutModal } from './features/auth/components/LogoutModal'
import { Footer } from './layouts/Footer';
import { Login } from './features/auth/components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [logoutOpen, setLogoutOpen] = useState(false)
    const [activePage, setActivePage] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(true)

    useEffect(() => {
        const save_token = localStorage.getItem('token')
        const save_usr = localStorage.getItem('usr')

        if (save_token && save_usr) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usr");
        setIsLoggedIn(false);
        setActivePage("Dashboard");
    };

    const ProtectedRoute = ({ children }) => {
        return isLoggedIn ? children : <Navigate to="/login" replace />;
    };

    return (
        <BrowserRouter>
            {!isLoggedIn ? (
                <Routes>
                    <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='*' element={<Navigate to="/login" replace />} />
                </Routes>
            ) : (
                <div>
                    <Sidebar
                        activePage={activePage}
                        setActivePage={setActivePage}
                        openLogoutModal={() => setLogoutOpen(true)}
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <LogoutModal
                        isOpen={logoutOpen} s
                        onClose={() => setLogoutOpen(false)}
                        onLogout={handleLogout}
                        setActivePage={setActivePage}
                    />
                    <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
                        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} openLogoutModal={() => setLogoutOpen(true)} />
                        <div className="p-6 mt-20 mb-20">
                            {
                                <Routes>
                                    <Route path="/dashboard" element={
                                        <ProtectedRoute>
                                            <Dashboard />
                                        </ProtectedRoute>
                                    } />
                                    <Route path="/attendance" element={
                                        <ProtectedRoute>
                                            <AttendanceContent />
                                        </ProtectedRoute>
                                    } />
                                    <Route path="/users" element={
                                        <ProtectedRoute>
                                            <UserContent data={users} />
                                        </ProtectedRoute>
                                    } />
                                    <Route path="/settings" element={
                                        <ProtectedRoute>
                                            <Setting />
                                        </ProtectedRoute>
                                    } />
                                    <Route path="*" element={<ComingSoon />} />
                                </Routes>
                            }
                        </div>
                        <Footer toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
                    </div>
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
