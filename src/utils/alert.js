import { faCalendarAlt, faExclamationTriangle, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export const alerts = [
    { message: '5 employees have exceeded late threshold this month', type: 'warning', icon: faExclamationTriangle },
    { message: 'New user registered', type: 'success', icon: faInfoCircle },
    { message: 'System maintenance scheduled for tomorrow', type: 'info', icon: faCalendarAlt },
]
