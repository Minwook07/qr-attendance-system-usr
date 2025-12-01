import { TableCard } from "../../../components/card-table"

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
        <TableCard
            title="Attendance List"
            columns={cols}
            data={data}
            cells={(key, value, row) => {
                if (key === "name") {
                    return <span className="font-medium text-white">{value}</span>;
                }
                if (key === "position") {
                    return (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {value}
                        </span>
                    );
                }
                if (key === "image") {
                    return value ? (
                        <img
                            src={value}
                            alt={value}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                        />
                    ) : (
                        <span className="text-gray-400">No image</span>
                    );
                }
                if (key === "overTime" && value !== "0h") {
                    return <span className="text-green-600 font-medium">{value}</span>;
                }
                if (key === "lateTime" && value !== "0h") {
                    return <span className="text-red-600 font-medium">{value}</span>;
                }
                if (key === "earlyOutTime" && value !== "0h") {
                    return <span className="text-orange-600 font-medium">{value}</span>;
                }
                return value;
            }}
        />
    )
}
