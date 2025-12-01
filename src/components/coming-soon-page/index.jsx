export function ComingSoon({ setActivePage }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 -m-6" style={{ backgroundColor: '#282c34' }}>
            <div className="max-w-2xl w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
                        Coming Soon
                    </h1>
                    <p className="text-gray-300 text-lg mb-2 leading-relaxed">
                        We're working hard to bring you something amazing.
                    </p>
                    <p className="text-gray-100 text-sm mb-8">
                        This page is currently under construction. Stay tuned!
                    </p>

                    <div className="mb-8">
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-0.5 transition-all duration-200"
                            onClick={() => setActivePage("Dashboard")}
                        >
                            Back to Dashboard
                        </button>
                        <button
                            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
                            onClick={() => setActivePage("Settings")}
                        >
                            Settings
                        </button>
                    </div>
                </div>

                <p className="text-center text-gray-100 text-sm mt-8">
                    Expected launch: Coming soon
                </p>
            </div>
        </div>
    );
}