let chart2 = Highcharts.chart('container2', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Countries compared by population density and total area.'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '0%',
        zMin: 0,
        name: 'Attributes',
        data: [{
            name: 'Spain',
            y: 20,
            z: 92.9
        }, {
            name: 'France',
            y: 20,
            z: 118.7
        }, {
            name: 'Poland',
            y: 20,
            z: 124.6
        }, {
            name: 'Czech Republic',
            y: 20,
            z: 137.5
        },
        {
            name: 'Czech Republic',
            y: 20,
            z: 137.5
        }]
    }]
});
