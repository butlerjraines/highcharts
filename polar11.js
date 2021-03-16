
let chart11 = Highcharts.chart('container11',



    {


        chart: {
            polar: true,
            showAxes: false,
            type: 'column',
        },

        title: {
            text: '5 Area w/ 5 Slices'
        },

        pane: [
            {
                //pane 0
                startAngle: 0,
                //how far to draw
                endAngle: 360,
                //center: ['25%', '25%'],
                size: 200,
            }


        ],


        xAxis: [{
            // type: 'category',
            //categories: ['A', 'B', 'C', 'D'],
            //pane 0  
            pane: 0,
            tickInterval: 36,
            min: 0,
            //x axis for this pain
            max: 360,
            labels: {
                enabled: true,
                // format: '${text}' // The $ is literally a dollar unit
                //distance: 15
            },

        }],

        yAxis: [{
            pane: 0,
            min: 0,
            //if we need a line on y axis to show gauge
            //tickInterval: 0,
            max: 200
        }],

        plotOptions: {
            series: {
                pointStart: 0,
                //controls how much space takes up on pie
                pointInterval: 36,
                pointPlacement: 'between',
            },


            column: {
                pointPadding: 0,
                groupPadding: 0,
                grouping: false,
                dataLabels: {
                    enabled: true
                },
            }
        },

        series: [{
            //pane: 0,
            // type: 'column',
            // name: 'Pane 0',
            data: [60, 80, 0, 0, 80, 120, 90, 75],

        }

        ]

    });



// Create the chart
let chart12 = Highcharts.chart('container12', {
    chart: {
        type: 'column',
        polar: true,
    },
    title: {
        text: ''
    },
    subtitle: {
        //text: 'TEST'
    },

    pane: [
        {
            //pane 0
            startAngle: 0,
            //how far to draw
            endAngle: 360,
            //center: ['25%', '25%'],
            size: 300,
        }],


    xAxis: {
        type: 'category',
        categories: ['ACT FLEX', 'ACT CORE', 'SEE CORE', 'SEE FLEX', 'INVENT PRESS'],
        labels: {
            style: {
                color: 'red',
                fontSize: '14px',
            },
           
                formatter: function () {
                    var label = this.value;
                    //this is firt letter of value hrm
                     //return this.value[0];
                    //return label;
                    //console.log(this.value[1]);

                    if (this.value == 'SEE CORE') {
                       var label = 'cat';
                       var style = 'blue';
                    }

                    else {
                        var style = 'black';

                    }
                    return '<span style="color:'+style+'">'+label+'</span>';
                }
            
            
        }
        //this causes category to break down
        // min:0,
        // max:360,
        // tickInterval: 36,
    },

    legend: {
        enabled: true,
        labelFormatter: function () {
            return this.userOptions.id
        }
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
            },
            // pointPlacement: 'between',
        },
        column: {
            pointPadding: 0,
            groupPadding: 0,
            grouping: false
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        data: [{
            id: 'China',
            color: '#e66556',
            y: 1100
        },
        {
            id: 'International',
            color: '#c9c145',
            y: 700
        },
        {
            id: 'International',
            color: '#ebb0a7',
            y: 600
        },
        {
            linkedTo: 'International',
            color: '#ebb0a7',
            y: 1000
        },
        {
            linkedTo: 'China',
            color: '#c9c145',
            y: 686
        }],

    }]


});


// Create the chart
let chart13 = Highcharts.chart('container13', {
    chart: {
        type: 'column',
        polar: true,
    },
    title: {
        text: 'TEST'
    },
    subtitle: {
        text: 'TEST'
    },

    pane: [
        {
            //pane 0
            startAngle: 0,
            //how far to draw
            endAngle: 72,
            //center: ['25%', '25%'],
            size: 400,
        }],


    xAxis: {
        type: 'category',
        categories: ['A'],
        //this causes category to break down
        // min:0,
        //max:72,
        // tickInterval: 36,
    },

    legend: {
        enabled: true,
        labelFormatter: function () {
            return this.userOptions.id
        }
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
            },
            // pointPlacement: 'between',
        },
        column: {
            pointPadding: 0,
            groupPadding: 0,
            grouping: false
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        data: [{
            id: 'China',
            color: '#004f9e',
            y: 1100
        },
        ],

    }]


});


// Create the chart
let chart14 = Highcharts.chart('container14', {

    chart: {
        type: 'column',
        polar: true,
    },
    title: {
        text: 'TEST'
    },
    subtitle: {
        text: 'TEST'
    },

    pane: [
        {
            //pane 0
            startAngle: 0,
            //how far to draw
            endAngle: 360,
            //center: ['25%', '25%'],
            size: 400,
        }],


    xAxis: {
        type: 'category',
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        //this causes category to break down
        // min:0,
        // max:360,
        // tickInterval: 36,
    },

    legend: {
        enabled: true,
        labelFormatter: function () {
            return this.userOptions.id
        }
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
            },
            // pointPlacement: 'between',
        },
        column: {
            pointPadding: 0,
            groupPadding: 0,
            grouping: false
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        data: [
            // pointPlacement: 'between',
            {
                id: 'China',
                color: '#004f9e',
                y: 1100
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            },
            // pointPlacement: 'between',
            {
                id: 'International',
                color: '#e73357',
                y: 700
            },
            // pointPlacement: 'between',
            {
                id: 'International',
                color: '#e73357',
                y: 600
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'International',
                color: '#e73357',
                y: 1000
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            },
            // pointPlacement: 'between',
            {
                linkedTo: 'China',
                color: '#004f9e',
                y: 686
            }

        ],

    }]

});