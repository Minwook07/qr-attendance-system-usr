export function exportToPdf(filteredData) {
    const printWindow = window.open('', '', 'height=600,width=800');
    const headers = ["Name", "Code", "Position", "Date", "In Time", "Out Time", "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"];

    printWindow.document.write(`
            <html>
            <head>
                <title>Attendance Report</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { text-align: center; color: #333; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #1f2937; color: white; }
                    tr:nth-child(even) { background-color: #f9fafb; }
                </style>
            </head>
            <body>
                <h1>Attendance Report</h1>
                <p>Generated on: ${new Date().toLocaleDateString()}</p>
                <table>
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
        `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
}