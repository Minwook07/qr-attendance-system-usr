import { faFileCsv, faFileExcel, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons";
import { ActionButton } from "./ActionButton";
import { AttendanceTable } from "./AttendanceTable";
import { useState } from "react";

const dummyData = [
    {
        id: "1",
        name: "Kim Ji-soo",
        code: "EMP001",
        position: "Backend Dev",
        date: "2025-11-19",
        inTime: "08:00",
        outTime: "17:00",
        workHour: "9h",
        overTime: "1h",
        lateTime: "0h",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2016/08/Jisoo-Blackpink-2025.jpg"
    },
    {
        id: "2",
        name: "Roseanne Park (Rosé)",
        code: "EMP002",
        position: "Testing",
        date: "2025-11-19",
        inTime: "08:15",
        outTime: "17:00",
        workHour: "8.75h",
        overTime: "0.75h",
        lateTime: "15m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2016/08/Rose-Blackpink-2025.jpg"
    },
    {
        id: "3",
        name: "Kim Jennie",
        code: "EMP003",
        position: "Frontend Dev",
        date: "2025-11-19",
        inTime: "08:05",
        outTime: "17:10",
        workHour: "9.05h",
        overTime: "1.05h",
        lateTime: "5m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2016/08/Jennie-Blackpink-2025.jpg"
    },
    {
        id: "4",
        name: "Hwang Ye-ji",
        code: "EMP004",
        position: "UI/UX Designer",
        date: "2025-11-19",
        inTime: "08:10",
        outTime: "17:00",
        workHour: "8.83h",
        overTime: "0.83h",
        lateTime: "10m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2019/01/Yeji-6.jpg"
    },
    {
        id: "5",
        name: "Choi Ji-su (Lia)",
        code: "EMP005",
        position: "Project Manager",
        date: "2025-11-19",
        inTime: "07:55",
        outTime: "17:00",
        workHour: "9.08h",
        overTime: "1.08h",
        lateTime: "0h",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2019/01/Lia-3.jpg"
    },
    {
        id: "6",
        name: "Shin Ryu-jin",
        code: "EMP006",
        position: "QA Engineer",
        date: "2025-11-19",
        inTime: "08:20",
        outTime: "17:00",
        workHour: "8.66h",
        overTime: "0.66h",
        lateTime: "20m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "/images/itzy/ryujin.png"
    },
    {
        id: "7",
        name: "Lee Chae-ryeong",
        code: "EMP007",
        position: "DevOps Engineer",
        date: "2025-11-19",
        inTime: "08:00",
        outTime: "17:30",
        workHour: "9.5h",
        overTime: "1.5h",
        lateTime: "0h",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2019/01/Chaeryeong-6.jpg"
    },
    {
        id: "8",
        name: "Shin Yu-na",
        code: "00X44M",
        position: "Support Engineer",
        date: "2025-11-19",
        inTime: "08:12",
        outTime: "17:05",
        workHour: "8.88h",
        overTime: "0.88h",
        lateTime: "12m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2019/01/Yuna-6.jpg"
    },
    {
        id: "9",
        name: "Hirai Momo",
        code: "00X44N",
        position: "Full Stack Dev",
        date: "2025-11-19",
        inTime: "07:59",
        outTime: "17:20",
        workHour: "9.35h",
        overTime: "1.35h",
        lateTime: "0h",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2016/05/MOMO-1-572x800.jpeg"
    },
    {
        id: "10",
        name: "Ning Yizhuo (NingNing)",
        code: "00X44O",
        position: "Intern",
        date: "2025-11-19",
        inTime: "08:30",
        outTime: "17:00",
        workHour: "8.5h",
        overTime: "0.5h",
        lateTime: "30m",
        earlyOutTime: "0h",
        inLocation: "Office",
        outLocation: "Office",
        image: "https://kprofiles.com/wp-content/uploads/2020/10/IMG_1576-534x800.jpeg"
    }
]

export function AttendanceContent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const filteredData = dummyData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.position.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDateRange = (!fromDate || item.date >= fromDate) &&
            (!toDate || item.date <= toDate);

        return matchesSearch && matchesDateRange;
    });

    const exportToCSV = () => {
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
    };

    const exportToExcel = () => {
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
    };

    const exportToPDF = () => {
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
    };

    const handlePrint = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        const headers = ["Name", "Code", "Position", "Date", "In Time", "Out Time", "Work Hour", "Over Time", "Late Time", "Early Out", "In Location", "Out Location"];
        
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Attendance</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { text-align: center; color: #333; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    th { background-color: #1f2937; color: white; }
                    tr:nth-child(even) { background-color: #f9fafb; }
                    @media print {
                        body { padding: 10px; }
                        table { font-size: 11px; }
                    }
                </style>
            </head>
            <body>
                <h1>Attendance Report</h1>
                <p>Date: ${new Date().toLocaleDateString()}</p>
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
        }, 250);
    };

    return (
        <>
            <h2 className="text-4xl mb-6">Attendance Content</h2>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="from_date" className="mb-2 text-white font-medium">
                            From Date
                        </label>
                        <input
                            type="date"
                            id="from_date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="border text-black border-gray-300 rounded-md p-2 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 
                               focus:border-transparent"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="to_date" className="mb-2 text-white font-medium">
                            To Date
                        </label>
                        <input
                            type="date"
                            id="to_date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="border text-black border-gray-300 rounded-md p-2 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 
                               focus:border-transparent"
                        />
                    </div>
                </div>

                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search here by name, code, position..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border text-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="flex gap-3 justify-end mb-6">
                <ActionButton label="CSV" color="bg-green-500" icon={faFileCsv} onClick={exportToCSV} />
                <ActionButton label="PDF" color="bg-red-500" icon={faFilePdf} onClick={exportToPDF} />
                <ActionButton label="Print" color="bg-blue-500" icon={faPrint} onClick={handlePrint} />
                <ActionButton label="Excel" color="bg-yellow-500" icon={faFileExcel} onClick={exportToExcel} />
            </div>

            <AttendanceTable data={filteredData} />
        </>
    )
}
