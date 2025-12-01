import { faDatabase, faQrcode, faUserClock, faUsers } from "@fortawesome/free-solid-svg-icons"
import { CardDashboard } from "../../../components/card-dashboard";
import { dummyData } from "../../attendance/utils/attendance-data";
import { formatDate } from "../../../utils/date";
import { AlertsPanel } from "../../../components/alerts-panel";
import { alerts } from "../../../utils/alert";
import { QuickChart } from "./QuickChart";


export function Dashboard() {
    const today = formatDate(new Date());
    const totalUsr = dummyData.length;
    const totalComeLate = dummyData.filter(
        user => user.date === today && user.lateTime !== "0h" && user.lateTime !== "0m"
    ).length;
    const totalAttendanceToday = dummyData.filter(
        user => user.date === today
    ).length;


    const items = [
        { num: totalUsr, title: 'Total Users', bg: 'bg-amber-500', icon: faUsers },
        { num: totalComeLate, title: 'Total Come late Today', bg: 'bg-red-600', icon: faUserClock },
        { num: totalAttendanceToday, title: 'Total Attendance Today', bg: 'bg-orange-600', icon: faDatabase },
        { num: 25, title: 'Total QR', bg: 'bg-gray-600', icon: faQrcode }
    ]
    return (
        <>
            <div className="space-y-6">
                <div className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg w-full py-6 px-6 shadow-lg">
                    <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-blue-100 text-lg">Nihao, and Welcome!</p>
              <p className="text-blue-200 text-sm mt-1">{today}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {items.map((item, index) => (
                        <CardDashboard
                            key={index}
                            num={item.num}
                            title={item.title}
                            bg={item.bg}
                            icon={item.icon}
                        />
                    ))}
                </div>

                <div className="space-y-4">
                    {alerts.map((alert, index) => (
                        <AlertsPanel
                            key={index}
                            icon={alert.icon}
                            message={alert.message}
                            type={alert.type}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2">
                        <QuickChart />
                    </div>
                    <div className="bg-[#2d3748] rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                        <div className="space-y-3 max-h-80 overflow-y-auto">
                            {dummyData.slice(0, 8).map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-3 bg-[#23262d] rounded-lg hover:bg-gray-900 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                            {/* {user.name.charAt(0)} */}
                                            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{user.name}</p>
                                            <p className="text-xs text-gray-100">{user.lateTime !== "0h" && user.lateTime !== "0m" ? `Late: ${user.lateTime}` : "On time"}</p>
                                        </div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${user.lateTime !== "0h" && user.lateTime !== "0m" ? "bg-red-500" : "bg-green-500"}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
