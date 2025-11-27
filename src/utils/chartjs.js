export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: 'white', // legend text color
            },
        },
        title: {
            display: true,
            text: "This Week's Attendance",
            color: 'white', // title text color
        },
        tooltip: {
            titleColor: 'white', // tooltip title
            bodyColor: 'white',  // tooltip body
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'white', // X-axis labels color
            },
            grid: {
                color: 'rgba(255,255,255,0.2)', // X-axis grid line color
                borderColor: 'white',            // X-axis border line color
            },
        },
        y: {
            beginAtZero: true,  // start at zero
            max: 100,           // max value
            ticks: {
                color: 'white', // Y-axis labels color
            },
            grid: {
                color: 'rgba(255,255,255,0.2)', // Y-axis grid line color
                borderColor: 'white',            // Y-axis border line color
            },
        },
    },
};
