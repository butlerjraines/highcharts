
let chart7 = Highcharts.chart('container7',



    {


        chart: {
            polar: true,
            showAxes: true,
            type: 'column',
        },

        title: {
            text: '10 Area w/ 10 Slices'
        },

        pane: [{
            //pane 0
            startAngle: 0,
            //how far to draw
            endAngle: 360
        }

        ],


        xAxis: [{
            //pane 0  
            pane: 0,
            tickInterval: 36,
            min: 0,
            //x axis for this pain
            max: 360,
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

    
    
   
    
    ]

    });

