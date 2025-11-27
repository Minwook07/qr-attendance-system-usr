import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dummyData } from "../../features/attendance/utils/attendance-data";

export function QuickChart() {
    const weekData = [
        { day: 'Mon', attendance: 85 },
        { day: 'Tue', attendance: 92 },
        { day: 'Wed', attendance: 78 },
        { day: 'Thu', attendance: 88 },
        { day: 'Fri', attendance: 95 },
    ];


    return (
        <div className="bg-[#2d3748] rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faChartLine} />
                This Week's Attendance
            </h3>
            <div className="flex items-end justify-between h-48 space-x-2">
                {weekData.map((data, index) => (
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-[#1a202c] rounded-t relative" style={{ height: '100%' }}>
                            <div
                                className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t absolute bottom-0 w-full transition-all duration-500 hover:from-blue-400 hover:to-blue-300"
                                style={{ height: `${(data.attendance) * 100}%` }}
                            >
                                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                                    {data.attendance}%
                                </span>
                            </div>
                        </div>
                        <span className="text-xs mt-2 text-gray-400">{data.day}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}