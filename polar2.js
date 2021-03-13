var testdata3 = {
    name: 'b',
    value: [
      // each slice of the pie gets its own color
      {
        y: 30,
        color: '#1DACE8',
        name: '1a',
        label: 'hey'
      },
      {
        y: 20,
        color: '#1C366B',
        name: '2b',
        offset:-20
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
        name: '5e',
        selected: true
      
      },
     
    ]
  }
  
  var testdata2 = {
    name: 'a',
    value: [
      // each slice of the pie gets its own color
      {
        y: 30,
        color: '#1DACE8',
        name: 'a',
     
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
  
  let chart4 = Highcharts.chart('container4', {
  
    chart: {
      type: 'column',
      polar: true,
    },
  
    pane: [{
      center: ['25%', '25%'],
      size: 200,
      startAngle: 0,
      endAngle: 360,
    }, {
      center: ['50%', '25%'],
      size: 200,
      startAngle: 0,
      endAngle: 360
    }],
    
    yAxis: [{
      pane: 0,
    }, {
      pane: 1
    }],
    
    xAxis: [{
      pane: 0,
      tickInterval: 72,
      min: 0,
      max: 360,
      //labels: true,
      
    }, {
      pane: 1,
      tickInterval: 36,
      min: 0,
      max: 360,
      labels: false
    }],
    
    plotOptions: {
      series: {
        pointStart: 0,
        //this ishow much space the colors take up
        pointInterval: 72,
        pointPlacement: 'between',
        //allowPointSelect: true,
        //slicedOffset: 20
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
        grouping: false
      },
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
  