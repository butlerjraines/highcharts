  let chart5 = Highcharts.chart('container5', {
  
  chart: {
            polar: true,
            showAxes: true,
            type: 'column',
        },

        title: {
            text: 'Highcharts Polar Chart'
        },

        pane: [{
            startAngle: 0,
            endAngle: 72
        }],


        xAxis: {
            tickInterval: 72,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },

        yAxis: {
            min: 0,
           // tickInterval: 50,
            max: 200,
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
                pointInterval: 45,
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
            data: [150, 7, 6, 5, 4, ],
            yAxis: 0,
            xAxis: 0,
        }]

    });