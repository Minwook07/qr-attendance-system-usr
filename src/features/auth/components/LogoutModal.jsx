import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal } from "../../../components/modal"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export function LogoutModal(isOpen, onClose) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={"Confirm To Log out"}>
            <div className="space-y-4">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-red-600 w-8 h-8"/>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-white text-lg font-medium mb-2">
                        Are you sure you want to logout?
                    </p>
                    <p className="text-gray-300 text-sm">
                        You will need to login again to access your account.
                    </p>
                </div>

                <div className="flex gap-3 pt-2">
                    <button onClick={onClose} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                        Cancel
                    </button>
                    <button onClick={onClose} className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                        Logout
                    </button>
                </div>
            </div>
        </Modal>
    )
}