
let chart9 = Highcharts.chart('container9',



    {


        chart: {
            polar: true,
            showAxes: true,
            type: 'column',
        },

        title: {
            text: '5 Area w/ 5 Slices'
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
            tickInterval: 72,
            min: 0,
            //x axis for this pain
            max: 360,
        }
        ],

        yAxis: {
            min: 0,
            //if we need a line on y axis to show gauge
            //tickInterval: 0,
            max: 400,
            showEmpty: true,

        },

        plotOptions: {
            series: {
                pointStart: 0,
                //controls how much space takes up on pie
                pointInterval: 72,
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
            name: 'Pane 0',
            data: [300, 180, 80, 200, 500],
     
        },

        {
           pane: 1,
            type: 'column',
            name: 'Pane 1',
            data: [0,0,0,100,120,0,200],
            //xAxis: 90,
        },
    
        {
           // pane: 2,
            type: 'column',
            name: 'Pane 3',
            data: [0,0,0,0,0,0,0, 80, 120, 360],
            //xAxis: 90,
        }
    
    ]

    });

