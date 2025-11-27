export function TableCard({ columns, data, title, cells }) {
    return (
        <div className="w-full flex flex-col h-screen max-h-[600px] rounded-xl shadow-lg">
            {title && (
                <h2 className="text-2xl font-bold pt-4 mb-4">{title}</h2>
            )}

            <div className="overflow-x-auto w-full bg-white rounded-lg shadow-md mt-2">
                <table className="min-w-[1200px] w-full border-collapse">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0 z-10">
                        <tr>
                            {columns.map(col => (
                                <th
                                    key={col.key}
                                    className="px-6 py-4 text-left text-sm font-semibold border-r border-blue-500 last:border-r-0 whitespace-nowrap"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-gray-900 text-white">
                        {data && data.length > 0 ? (
                            data.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    {columns.map(col => (
                                        <td
                                            key={col.key}
                                            className="px-6 py-4 border-b text-sm whitespace-nowrap"
                                        >
                                            {cells
                                                ? cells(col.key, row[col.key], row)
                                                : row[col.key]
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-4 text-gray-500"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}