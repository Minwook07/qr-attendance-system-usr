export function LoadingPlaceholder() {
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#282c34' }}>
            <div className="text-center">
                {/* Animated Logo/Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Outer spinning ring */}
                        <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

                        {/* Inner icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Brand Name */}
                <h1 className="text-3xl font-bold text-white mb-2">DN Spurt</h1>

                {/* Loading Text */}
                <p className="text-gray-400 text-lg mb-6">Loading your dashboard...</p>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}