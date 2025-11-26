import { users } from "../utils/user/userData"

const cols = [
    { key: "id", label: "ID" },
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "email", label: "Email" },
    { key: "phoneNum", label: "Phone Number" },
    { key: "created_at", label: "Created_at" },
    { key: "updated_at", label: "Updated_at" }
]

export function UserContentList({data}) {
    return (
        <>
            <h2 className="text-4xl mb-6">Users List</h2>
            <div className="w-full flex flex-col h-screen max-h-[600px] bg-white rounded-xl shadow-lg">
                <div className="overflow-x-auto w-full bg-white rounded-lg shadow-md">
                    <table className="min-w-[1200px] w-full border-collapse">
                        <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0 z-10">
                            <tr>
                                {cols.map(col => (
                                    <th key={col.key} className="px-6 py-4 text-left text-sm font-semibold border-r border-blue-500 last:border-r-0 whitespace-nowrap">
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {data && data.length > 0 ? (
                                data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        {cols.map(col => (
                                            <td key={col.key} className="px-6 py-4 border-b text-sm whitespace-nowrap">
                                                {col.key === "name" ? (
                                                    <span className="font-medium text-gray-900">{row[col.key]}</span>
                                                ) : col.key === "position" ? (
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                        {row[col.key]}
                                                    </span>
                                                ) : (
                                                    row[col.key]
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={11} className="text-center py-4 text-gray-500">
                                        No attendance data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}