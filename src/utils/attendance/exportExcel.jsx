export function exportToExcel(filteredData) {
    const headers = [
        "Name", "Code", "Position", "Date", "In Time", "Out Time",
        "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"
    ];

    let excelContent = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head><meta charset="UTF-8"></head>
        <body>
            <table border="1" style="border-collapse:collapse; font-family:Arial, sans-serif; font-size:12px;">
                <thead>
                    <tr style="background-color:#2563eb; color:white;">
                        ${headers.map(h => `<th style="padding:5px;">${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${filteredData.map(row => `
                        <tr>
                            <td>${row.name}</td>
                            <td>${row.code}</td>
                            <td style="background-color:#dbeafe; color:#1e40af; border-radius:4px;">${row.position}</td>
                            <td>${row.date}</td>
                            <td>${row.inTime}</td>
                            <td>${row.outTime}</td>
                            <td>${row.workHour}</td>
                            <td style="${row.overTime !== '0h' ? 'color:#16a34a; font-weight:bold;' : ''}">${row.overTime}</td>
                            <td style="${row.lateTime !== '0h' ? 'color:#dc2626; font-weight:bold;' : ''}">${row.lateTime}</td>
                            <td style="${row.earlyOutTime !== '0h' ? 'color:#f97316; font-weight:bold;' : ''}">${row.earlyOutTime}</td>
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
