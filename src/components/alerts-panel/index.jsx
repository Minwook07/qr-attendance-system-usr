import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AlertsPanel({ icon, message, type }) {

    const typeColors = {
        warning: 'bg-yellow-50 border-yellow-600 text-yellow-800',
        info: 'bg-blue-200 border-blue-600 text-blue-800',
        success: 'bg-green-100 border-green-600 text-green-800',
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