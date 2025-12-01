import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bar } from "react-chartjs-2";
import { options } from "../../../utils/chartjs";
import { dummyData } from "../../attendance/utils/attendance-data";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    BarController,
    LineController,
    Title,
    Filler,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    BarController,
    LineController,
    Title,
    Filler,
    Tooltip,
    Legend
);

export function QuickChart() {
    // 1. Prepare weekdays you want
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    // 2. Map weekdays to attendance percentage
    const totalUsers = dummyData.length;

    // Helper: get day of week from date string
    const getWeekDay = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { weekday: "short" });
    };

    const weekData = weekDays.map((day) => {
        const attendanceCount = dummyData.filter(
            (user) => getWeekDay(user.date) === day
        ).length;

        const attendancePercent = Math.round((attendanceCount / totalUsers) * 100);

        return { day, attendancePercent };
    });

    const labels = weekData.map((d) => d.day);
    const data = {
        labels,
        datasets: [
            {
                type: "line",
                label: "Trend",
                data: weekData.map((d) => d.attendancePercent),
                borderColor: "rgba(255, 206, 86, 1)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                tension: 0.4,
                fill: true,
            },
            {
                type: "bar",
                label: "Attendance %",
                data: weekData.map((d) => d.attendancePercent),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };


    return (
        <div className="bg-[#2d3748] rounded-lg shadow-lg p-6 text-white w-full">
            <h3 className="text-xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                This Week's Attendance
            </h3>
            <Bar options={options} data={data} />
        </div>
    );
}
