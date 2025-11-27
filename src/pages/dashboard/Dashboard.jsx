import { faDatabase, faQrcode, faUserClock, faUsers } from "@fortawesome/free-solid-svg-icons"
import { CardDashboard } from "./CardDashboard"
import { dummyData } from "../../components/AttendanceContent"
import { formatDate } from "../../utils/date";


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
            <h2 className="text-4xl mb-4">Dashboard</h2>
            <div className="mb-10 bg-[#2d3748] text-white rounded-lg w-full py-5 px-6">
                Nihao, and Welcome!
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </>
    )
}
