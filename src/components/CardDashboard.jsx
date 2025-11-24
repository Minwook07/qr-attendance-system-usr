import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function CardDashboard({ num, title, bg, icon }) {
    return (
        <div className={`${bg} group p-6 rounded-lg shadow flex items-center justify-between cursor-pointer`}>
            <div>
                <h2 className="text-3xl font-bold">{num}</h2>
                <p className="text-sm">{title}</p>
            </div>

            <div className="
                bg-white/20 p-3 rounded-full
                transition-transform duration-300
                group-hover:scale-125
            ">
                <FontAwesomeIcon icon={icon} className="text-white text-xl" />
            </div>
        </div>
    )
}
