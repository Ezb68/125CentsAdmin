var options = {
    chart: {
        offsetX: 0,
        offsetY: 0,
        type: "area",
        height: '100%'
    },
    stroke: {
        width: 2,
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: true,
    },
    theme: {
        palette: 'palette1',
    },
    toolbar: {
        show: false,
    },
    series: [
        {
            name: "time 1",
            data: [45, 52, 38, 45, 19, 23, 2]
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 100, 100]
        }
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: '#ffffff',
            }
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: '#ffffff',
            }
        }
    }
};

var options2 = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
        type: 'line',
        zoom: {
            enabled: false
        },

        height: '100%'
    },
    grid: {
        show: true,
        borderColor: '#0D76C9',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },

    xaxis: {
        categories: ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7', 'Feb 8', 'Feb 9'],
        labels: {
            show: true,
            style: {
                colors: ['#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9', '#0D76C9'],
            }
        },
        axisBorder:{
            color: '#0D76C9',
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: ['#0D76C9'],
            }
        }
    }
};

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
// var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
// var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
// var chartline = new ApexCharts(document.querySelector("#chartline"), options2);
//
// chart.render();
// chart1.render();
// chart2.render();
// chart3.render();
// chartline.render();

