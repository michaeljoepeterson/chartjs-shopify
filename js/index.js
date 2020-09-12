
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'My second dataset',
            backgroundColor: ['rgb(55, 99, 132)','rgb(55, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

function initApp(){
    let options = {
        types:[
            'line',
            'bar',
            'radar',
            'pie'
        ],
        chartTitles:[
            'First Chart'
            ,'My Second Chart'
            ,'The Third Chart'
            ,'Wage Data'],
        dataLabels:[
            ['Monday','Tuesday','Wednesday','Thursday'],
            ['May','June','July','August'],
            ['Edmonton','Calgary','Vancouver','Leduc'],
            ['Math','Science','Gym','Art']
        ],
        allChartData:[
            [10, 14, 5, 2],
            [30, 10, 35, 23],
            [20, 20, 5, 21],
            [3, 1, 5, 2]
        ],
        chartColors:[
            ['rgb(255, 99, 132)'],
            ['rgb(25, 99, 132)','rgb(255, 9, 132)','rgb(255, 99, 12)','rgb(255, 150, 132)'],
            ['rgb(205, 99, 132)','rgb(255, 90, 132)','rgb(55, 99, 12)','rgb(255, 50, 12)'],
            ['rgb(255, 50, 12)']
        ],
        chartColors:[
            ['rgb(255, 99, 132)'],
            ['rgb(25, 99, 132)','rgb(255, 9, 132)','rgb(255, 99, 12)','rgb(255, 150, 132)'],
            ['rgb(205, 99, 132)','rgb(255, 90, 132)','rgb(55, 99, 12)','rgb(255, 50, 12)'],
            ['rgb(255, 50, 12)']
        ],
        borderColors:[
            ['rgb(25, 99, 132)'],
            ['rgb(253, 99, 132)','rgb(15, 9, 132)','rgb(25, 99, 12)','rgb(255, 10, 132)'],
            ['rgb(205, 99, 132)','rgb(255, 90, 132)','rgb(55, 99, 12)','rgb(255, 250, 12)'],
            ['rgb(202, 50, 212)']
        ],
        borderWidths:[2,5,6,10]

    };
    let chartApp = new ChartApp(options);
}

$(initApp);