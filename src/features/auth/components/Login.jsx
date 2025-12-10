import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { settings } from '../../../utils/setting';
import { useNavigate } from 'react-router-dom';

export function Login({setIsLoggedIn}) {
    const setting = settings[0]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const usr_token = "AaBb123@@"

        const usr = {
            name: 'System Admin',
            email
        }

        localStorage.setItem("token", usr_token)
        localStorage.setItem("usr", JSON.stringify(usr))
        setIsLoggedIn(true);

        navigate('/dashboard')
        console.log('Login submitted', { usr_token, usr });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="bg-purple-600 p-12 pb-0 flex flex-col justify-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold mb-6 leading-tight">
                                Dashboard
                            </h1>
                            <p className="text-lg text-blue-100 mb-8">
                                Simplify your qr attendance management with our user-friendly admin dashboard.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <img
                                src="/images/login/3d-avatar.png"
                                alt="Dashboard preview"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="p-12 flex flex-col justify-center">
                        <div className="mb-8 text-center">
                            <div className="flex items-center gap-3 mb-6 justify-center">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900">{setting.sysname}</span>
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                            <p className="text-gray-500">Please login to your account</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 flex items-center"
                                    >
                                        <FontAwesomeIcon icon={faEye} className='w-5 h-5 p-0' />
                                    </button>
                                </div>
                                <div className="text-right mt-2">
                                    <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                            >
                                Login
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-600">
                            Not a member?{' '}
                            <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
                                Contact us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}