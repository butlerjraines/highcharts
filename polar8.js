
let chart8 = Highcharts.chart('container8',



    {


        chart: {
            polar: true,
            showAxes: true,
            type: 'column',
        
        },

        title: {
            text: '5 Area w/ 10 Slices'
        },

        pane: {
            //pane 0
            startAngle: 0,
            //how far to draw
            endAngle: 360
        },


        xAxis: [{
            //pane 0  
            pane: 0,
            tickInterval: 72,
            min: 0,
            //x axis for this pain
            max: 360,
            //visible: false,
            //categories: ['teemo', 'ryze', 'yasuo', 'vayne', 'maokai', 'poppy'],
            //tickmarkPlacement: 'on',
        tickmarkPlacement: 'between',
        lineWidth: 5,
    
        }
        ],

        yAxis: {
            min: 0,
            //if we need a line on y axis to show gauge
            //tickInterval: null,
            max: 400,
            showEmpty: true,
            endOnTick: false,

        },

        plotOptions: {
            series: {
                pointStart: 0,
                //controls how much space takes up on pie
                pointInterval: 36,
                pointPlacement: 'between',
            },
            column: {
                pointPadding: 10,
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
            data: [0, 0, 0, 100, 120, 0, 200],
            //xAxis: 90,
        },

        {
            // pane: 2,
            type: 'column',
            name: 'Pane 3',
            data: [0, 0, 0, 0, 0, 0, 0, 80, 120, 360],
            //xAxis: 90,
        }

        ]

    });

