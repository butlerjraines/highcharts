


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
        }],


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
        }],

        yAxis: {
            min: 0,
            // tickInterval: 50,
            max: 300,
            showEmpty: true,
            plotBands: [{
                from: 0,
                to: 50,
                color: 'red'
            }, {
                from: 50,
                to: 100,
                color: '#EFA867'
            }, {
                from: 100,
                to: 150,
                color: '#247D7E'
            }, {
                from: 150,
                to: 200,
                color: '#E1E9E0'
            }

            ]


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
            type: 'column',
            name: 'Column',
            data: [300, 7, 6, 5, 4,],
            yAxis: 0,
            xAxis: 0,
        }]

    });