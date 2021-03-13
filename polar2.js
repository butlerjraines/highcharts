var testdata3 = {
    name: 'b',
    value: [
      // each slice of the pie gets its own color
      {
        y: 30,
        color: '#1DACE8',
        name: '1a'
      },
      {
        y: 20,
        color: '#1C366B',
        name: '2b'
      },
      {
        y: 35,
        color: '#F24D29',
        name: '3c'
      },
      {
        y: 23,
        color: '#E5C4A1',
        name: '4d'
      },
      {
        y: 95,
        color: '#C4CFD0',
        name: '5e'
      }
    ]
  }
  
  var testdata2 = {
    name: 'a',
    value: [
      // each slice of the pie gets its own color
      {
        y: 30,
        color: '#1DACE8',
        name: 'a'
      },
      {
        y: 30,
        color: '#1C366B',
        name: 'b'
      },
      {
        y: 45,
        color: '#F24D29',
        name: 'c'
      },
      {
        y: 43,
        color: '#E5C4A1',
        name: 'd'
      },
      {
        y: 15,
        color: '#C4CFD0',
        name: 'e'
      }
    ]
  }
  
  Highcharts.chart('container', {
  
    chart: {
      type: 'column',
      polar: true,
    },
  
    pane: [{
      center: ['25%', '20%'],
      size: 150,
      startAngle: 0,
      endAngle: 360
    }, {
      center: ['55%', '20%'],
      size: 150,
      startAngle: 0,
      endAngle: 360
    }],
    
    yAxis: [{
      pane: 0,
    }, {
      pane: 1,
    }],
    
    xAxis: [{
      pane: 0,
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: false
    }, {
      pane: 1,
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: false
    }],
    
    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45,
        pointPlacement: 'between'
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
        grouping: false
      }
    },
  
    series: [{
      data: testdata2.value,
      yAxis: 0,
      xAxis: 0,
  
    }, {
      data: testdata3.value,
      yAxis: 1,
      xAxis: 1
    }]
  });
  