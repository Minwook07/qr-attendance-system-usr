import { TableCard } from "../../components/card-table";

const usrCols = [
    { key: "id", label: "ID", sortable: true },
    { key: "code", label: "Code", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "position", label: "Position", sortable: false },
    { key: "email", label: "Email", sortable: false },
    { key: "phoneNum", label: "Phone Number", sortable: false },
    { key: "created_at", label: "Created at", sortable: true },
    { key: "updated_at", label: "Updated at", sortable: true },
]

export function UserTable({ data }) {
    return (
        <TableCard
            title="Users List"
            columns={usrCols}
            data={data}
            renderCell={(key, value) => {
                if (key === "name") {
                    return <span className="font-medium text-gray-900">{value}</span>;
                }
                if (key === "position") {
                    return (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {value}
                        </span>
                    );
                }
                return value;
            }}
        />
    )
}