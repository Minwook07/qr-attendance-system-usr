export function exportToExcel(filteredData) {
    const headers = ["Name", "Code", "Position", "Date", "In Time", "Out Time", "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"];

    let excelContent = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
            <head><meta charset="UTF-8"></head>
            <body>
            <table border="1">
                <thead>
                    <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                </thead>
                <tbody>
                    ${filteredData.map(row => `
                        <tr>
                            <td>${row.name}</td>
                            <td>${row.code}</td>
                            <td>${row.position}</td>
                            <td>${row.date}</td>
                            <td>${row.inTime}</td>
                            <td>${row.outTime}</td>
                            <td>${row.workHour}</td>
                            <td>${row.overTime}</td>
                            <td>${row.lateTime}</td>
                            <td>${row.earlyOutTime}</td>
                            <td>${row.inLocation}</td>
                            <td>${row.outLocation}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            </body>
            </html>
        `;

    const blob = new Blob([excelContent], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `attendance_${new Date().toISOString().split('T')[0]}.xls`;
    link.click();
}