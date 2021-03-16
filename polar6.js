
let chart6 = Highcharts.chart('container6',



    {


        chart: {
            polar: true,
            showAxes: true,
            type: 'column',
        },

        title: {
            text: 'Highcharts Polar Chart'
        },

        pane: [{
            //pane 0
            startAngle: 0,
            endAngle: 72
        }, {
            //pane 1
            startAngle: 72,
            endAngle: 144
        },
        {
            //pane2
            startAngle: 144,
            endAngle: 216
        }


        ],


        xAxis: [{
            //pane 0  
            pane: 0,
            tickInterval: 36,
            min: 0,
            //x axis for this pain
            max: 72,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        {
            //pane 1
            pane: 1,
            tickInterval: 36,
            min: 0,
            //x axis for this pain
            max: 72,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        {
            //pane 1
            pane: 2,
            tickInterval: 144,
            min: 0,
            //x axis for this pain
            max: 144,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        }

        ],

        yAxis: {
            min: 0,
            // tickInterval: 50,
            max: 400,
            showEmpty: true,

        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 36,
                pointPlacement: 'between',
            },
            column: {
                pointPadding: 0,
                groupPadding: 0,
                grouping: false
            }
        },

        series: [{
            pane: 0,
            type: 'column',
            name: 'Column',
            data: [300, 180, 80, 200, 500],
     
        },

        {
           pane: 1,
            type: 'column',
            name: 'Column',
            data: [0,0,0,100,120,0,200],
            //xAxis: 90,
        },
    
        {
           // pane: 2,
            type: 'column',
            name: 'Column',
            data: [0,0,0,0,0,0,0, 80, 120, 360],
            //xAxis: 90,
        }
    
    ]

    });

