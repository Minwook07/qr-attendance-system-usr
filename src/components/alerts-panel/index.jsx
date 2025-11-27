import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AlertsPanel({ icon, message, type }) {

    const typeColors = {
        warning: 'bg-yellow-500 border-yellow-600',
        info: 'bg-blue-500 border-blue-600',
        success: 'bg-green-500 border-green-600',
    }

    const bgColor = typeColors[type] || 'bg-gray-500'
    return (
        <div className="space-y-3">
            <div className={`${bgColor} border-l-4 rounded-lg shadow-lg p-4 text-white`}>
                <div className="flex items-center">
                    {icon && <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />}
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    )
}