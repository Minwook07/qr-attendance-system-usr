import { faDatabase, faQrcode, faUserClock, faUsers } from "@fortawesome/free-solid-svg-icons"
import { CardDashboard } from "./CardDashboard"

const items = [
    { num: 4, title: 'Total Users', bg: 'bg-amber-500', icon: faUsers },
    { num: 2, title: 'Total Come late Today', bg: 'bg-red-600', icon: faUserClock },
    { num: 20, title: 'Total Attendance Today', bg: 'bg-orange-600', icon: faDatabase },
    { num: 25, title: 'Total QR', bg: 'bg-gray-600', icon: faQrcode }
]

export function Dashboard() {
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
