import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function ActionButton({ label, onClick, color, icon }) {
    return (
        <button
            onClick={onClick}
            className={`${color} hover:opacity-90 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-transform transform hover:scale-105`}
        >
            {icon && <FontAwesomeIcon icon={icon} className="text-white text-xl" />}
            {label}
        </button>
    )
}
