export function exportToPdf(filteredData) {
    const printWindow = window.open('', '', 'height=600,width=1000');
    const headers = [
        "Name", "Code", "Position", "Date", "In Time", "Out Time",
        "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"
    ];

    printWindow.document.write(`
        <html>
        <head>
            <title>Attendance Report</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; color: #333; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #2563eb; color: white; font-weight: bold; }
                tr:nth-child(even) { background-color: #f3f4f6; }
                .position-badge { background-color: #dbeafe; color: #1e40af; padding: 2px 6px; border-radius: 12px; font-size: 11px; }
                .late { color: #dc2626; font-weight: bold; }
                .over { color: #16a34a; font-weight: bold; }
                .early { color: #f97316; font-weight: bold; }
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
                            <td><span class="position-badge">${row.position}</span></td>
                            <td>${row.date}</td>
                            <td>${row.inTime}</td>
                            <td>${row.outTime}</td>
                            <td>${row.workHour}</td>
                            <td>${row.overTime !== '0h' ? `<span class="over">${row.overTime}</span>` : row.overTime}</td>
                            <td>${row.lateTime !== '0h' ? `<span class="late">${row.lateTime}</span>` : row.lateTime}</td>
                            <td>${row.earlyOutTime !== '0h' ? `<span class="early">${row.earlyOutTime}</span>` : row.earlyOutTime}</td>
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
