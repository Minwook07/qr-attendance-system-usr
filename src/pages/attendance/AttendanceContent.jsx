import { faFileCsv, faFileExcel, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons";
import { ActionButton } from "../../components/action-button";
import { AttendanceTable } from "./AttendanceTable";
import { useState } from "react";
import { filterAttendance } from "../../features/attendance/utils/format-attendance";
import { dummyData } from "../../features/attendance/utils/attendance-data";
import { exportToCsv } from "../../features/attendance/utils/export-csv";
import { exportToPdf } from "../../features/attendance/utils/export-pdf";
import { exportToExcel } from "../../features/attendance/utils/export-excel";
import { handlePrint } from "../../features/attendance/utils/print-attendance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { formatDate } from "../../utils/date";

export function AttendanceContent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const filteredData = filterAttendance(dummyData, searchTerm, fromDate, toDate);

    return (
        <>
            <h2 className="text-4xl mb-6">Attendance Content</h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-6">
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <div className="flex flex-col w-full sm:w-auto">
                        <label className="mb-2 text-white font-medium">From Date</label>
                        <DatePicker
                            selected={fromDate ? new Date(fromDate) : null}
                            onChange={(date) => setFromDate(formatDate(date))}
                            isClearable
                            placeholderText="Select from date"
                            className="border text-black border-gray-300 rounded-md p-2 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 
                            focus:border-transparent w-full"
                        />
                    </div>

                    <div className="flex flex-col w-full sm:w-auto">
                        <label className="mb-2 text-white font-medium">To Date</label>
                        <DatePicker
                            selected={toDate ? new Date(toDate) : null}
                            onChange={(date) => setToDate(formatDate(date))}
                            isClearable
                            placeholderText="Select to date"
                            className="border text-black border-gray-300 rounded-md p-2 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 
                            focus:border-transparent w-full"
                        />
                    </div>

                </div>

                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search by name, code, position..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border text-black border-gray-300 rounded-md p-2 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent w-full sm:w-80"
                />
            </div>

            <div className="flex flex-wrap gap-3 justify-end mb-6">
                <ActionButton label="CSV" color="bg-green-500" icon={faFileCsv} onClick={() => exportToCsv(filteredData)} />
                <ActionButton label="PDF" color="bg-red-500" icon={faFilePdf} onClick={() => exportToPdf(filteredData)} />
                <ActionButton label="Print" color="bg-blue-500" icon={faPrint} onClick={() => handlePrint(filteredData)} />
                <ActionButton label="Excel" color="bg-yellow-500" icon={faFileExcel} onClick={() => exportToExcel(filteredData)} />
            </div>

            <AttendanceTable data={filteredData} />
        </>
    );
}

