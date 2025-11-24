const cols = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "code", label: "Code" },
    { key: "position", label: "Position" },
    { key: "date", label: "Date" },
    { key: "inTime", label: "In Time" },
    { key: "outTime", label: "Out Time" },
    { key: "workHour", label: "Work Hour" },
    { key: "overTime", label: "Over Time" },
    { key: "lateTime", label: "Late Time" },
    { key: "earlyOutTime", label: "Early Out Time" },
    { key: "inLocation", label: "In Location" },
    { key: "outLocation", label: "Out Location" },
    { key: "image", label: "Image" },
]
export function AttendanceTable({ data }) {
    return (
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
                                        // <td className="px-4 py-2 border-b whitespace-nowrap" key={col.key}>{row[col.key]}</td>
                                        <td
                                            className="px-6 py-4 border-b text-sm whitespace-nowrap"
                                            key={col.key}
                                        >
                                            {col.key === 'name' ? (
                                                <span className="font-medium text-gray-900">{row[col.key]}</span>
                                            ) : col.key === 'position' ? (
                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                    {row[col.key]}
                                                </span>
                                            ) : col.key === 'image' ? (
                                                row[col.key] ? (
                                                    <img
                                                        src={row[col.key]}
                                                        alt={row[col.key]}
                                                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                                                    />
                                                ) : (
                                                    <span className="text-gray-400">No image</span>
                                                )
                                            ) : col.key === 'overTime' && row[col.key] !== '0h' ? (
                                                <span className="text-green-600 font-medium">{row[col.key]}</span>
                                            ) : col.key === 'lateTime' && row[col.key] !== '0h' ? (
                                                <span className="text-red-600 font-medium">{row[col.key]}</span>
                                            ) : col.key === 'earlyOutTime' && row[col.key] !== '0h' ? (
                                                <span className="text-orange-600 font-medium">{row[col.key]}</span>
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

            <div className="flex-shrink-0 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-300 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-semibold text-gray-900">1</span> to{' '}
                        <span className="font-semibold text-gray-900">8</span> of{' '}
                        <span className="font-semibold text-gray-900">10</span> entries
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                        // onClick={handlePrev}
                        // disabled={currentPage === 1}
                        // className={`px-4 py-2 rounded-lg font-medium transition-all ${currentPage === 1
                        //     ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        //     : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        //     }`}
                        >
                            Prev
                        </button>
                        <span className="px-3 py-2 text-sm font-medium text-gray-700">
                            Page 1 of 10
                        </span>
                        <button
                        // onClick={handleNext}
                        // disabled={currentPage === totalPages}
                        // className={`px-4 py-2 rounded-lg font-medium transition-all ${currentPage === totalPages
                        //     ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        //     : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        //     }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
