import { faKey, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Setting() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">System Settings</h1>

                <div className="bg-[#1e2128] rounded-xl shadow-2xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-6 pb-3 border-b-2 border-blue-500">
                        General Configuration
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="">
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="app_name" className="font-semibold text-gray-300">
                                        System Name
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="text"
                                        name="app_name"
                                        id="app_name"
                                        defaultValue="OMSK"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-500"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Enter your system name" />
                                        <span>Enter your system name</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="start_time" className="font-semibold text-gray-300">
                                        Start Time
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="time"
                                        name="start_time"
                                        id="start_time"
                                        defaultValue="08:00"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Set daily start time" />
                                        <span>Set daily start time</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="out_time" className="font-semibold text-gray-300">
                                        Out Time
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="time"
                                        name="out_time"
                                        id="out_time"
                                        defaultValue="17:00"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Set daily end time" />
                                        <span>Set daily end time</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="log_favicon" className="font-semibold text-gray-300">
                                        Logo & Favicon
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="file"
                                        name="log_favicon"
                                        id="log_favicon"
                                        accept="image/*"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Upload your logo and favicon" />
                                        <span>Upload your logo and favicon (PNG, JPG) | max 5MB</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6"></div>
                                <div className="sm:w-4/6 flex-1">
                                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center bg-[#2c313a]">
                                        <p className="text-gray-500 text-sm">Logo preview will appear here</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="copyright" className="font-semibold text-gray-300">
                                        Copyright
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="text"
                                        name="copyright"
                                        id="copyright"
                                        defaultValue="hob"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-500"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Copyright information" />
                                        <span>Copyright name for footer</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-5">
                                <div className="sm:w-2/6">
                                    <label htmlFor="key_app" className="font-semibold text-gray-300">
                                        Key App
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <input
                                        type="text"
                                        name="key_app"
                                        id="key_app"
                                        defaultValue="eDBGzT937i5hiysfiYrQ1vZTewfaPonMOuB4uQzx"
                                        disabled
                                        className="w-full bg-[#1a1d24] border border-gray-700 text-gray-500 rounded-lg px-3 py-2 cursor-not-allowed"
                                    />
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Your application key" />
                                        <span>Your unique application key</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6">
                                <div className="sm:w-2/6">
                                    <label htmlFor="time_zone" className="font-semibold text-gray-300">
                                        Timezone
                                    </label>
                                </div>
                                <div className="sm:w-4/6 flex-1">
                                    <select
                                        name="time_zone"
                                        id="time_zone"
                                        className="w-full bg-[#2c313a] border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    >
                                        <option value="Asia/Phnom_Penh">Asia/Phnom Penh (GMT+7)</option>
                                        <option value="Asia/Bangkok">Asia/Beijing (GMT+8)</option>
                                        <option value="Asia/Singapore">Asia/Singapore (GMT+8)</option>
                                        <option value="Asia/Ho_Chi_Minh">Asia/Seoul (GMT+9)</option>
                                    </select>
                                    <small className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="cursor-help text-gray-500" title="Select your timezone" />
                                        <span>Select your timezone</span>
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-700">
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md hover:shadow-lg">
                                    Save
                                </button>
                                <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition shadow-md hover:shadow-lg">
                                    <FontAwesomeIcon icon={faKey} className="me-3" />
                                    Generate New Key
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#1e2128] max-h-max rounded-xl shadow-2xl p-6 border border-gray-700">
                            <div className="flex flex-col items-center justify-center h-[400px]">
                                <div className="w-64 h-64 bg-[#2c313a] rounded-xl flex items-center justify-center shadow-inner mb-6 border-4 border-gray-700">
                                    <div className="text-center">
                                        <svg className="w-20 h-20 mx-auto text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                        <p className="text-gray-400 font-medium">QR Code Preview</p>
                                        <p className="text-gray-500 text-sm mt-1">Scan to access system</p>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold text-white mb-3 pb-3 border-b-2 border-blue-500">
                                    QR Code
                                </h2>
                                <p className="mb-6 text-center">This QR code is used for the first time opening the App.
                                    Scan this QR code and this is done only once.</p>

                                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition shadow-md hover:shadow-lg flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download QR Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}