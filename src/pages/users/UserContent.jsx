import { TableCard } from "../../components/card-table";

const usrCols = [
    { key: "id", label: "ID" },
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "email", label: "Email" },
    { key: "phoneNum", label: "Phone Number" },
    { key: "created_at", label: "Created_at" },
    { key: "updated_at", label: "Updated_at" }
]

export function UserContentList({ data }) {
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