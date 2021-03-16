
let chart10 = Highcharts.chart('container10',



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
        },
        {
            //pane 0
            startAngle: 72,
            //how far to draw
            endAngle: 144,
            //center: ['50%', '25%'],
            size: 260,
        },


        ],


        xAxis: [{
            //pane 0  
            pane: 0,
            tickInterval: 36,
            min: 0,
            //x axis for this pain
            max: 360,
        },
        {
            //pane 0  
            pane: 1,
            tickInterval: 36,
            min: 72,
            //x axis for this pain
            max: 144,
        }],

        yAxis: [{
            pane: 0,
            min: 0,
            //if we need a line on y axis to show gauge
            //tickInterval: 0,
            max: 200
         },
        {   pane: 1,
            min: 0,
            //if we need a line on y axis to show gauge
            //tickInterval: 0,
            max: 100,


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
                grouping: false
            }
        },

        series: [{
            pane: 0,
            type: 'column',
            name: 'Pane 0',
            data: [60, 80,0, 0, 80, 120, 90, 75],
     
        },

        {
           pane: 1,
            type: 'column',
            name: 'Pane 1',
            data: [0,0,110,80,0],
            
        }
    
    ]

    });

