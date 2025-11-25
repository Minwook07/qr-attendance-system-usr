export function exportToCsv(filteredData) {
    const headers = ["Name", "Code", "Position", "Date", "In Time", "Out Time", "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"];
    const csvContent = [
        headers.join(","),
        ...filteredData.map(row =>
            [row.name, row.code, row.position, row.date, row.inTime, row.outTime, row.workHour, row.overTime, row.lateTime, row.earlyOutTime, row.inLocation, row.outLocation]
                .map(field => `"${field}"`)
                .join(",")
        )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `attendance_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}