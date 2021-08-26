Highcharts.setOptions({
    colors: ['#01BAF2', '#71BF45', '#FAA74B']
});  
Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Air Composition',
      y:225
    },
  legend:{
    enabled:false
  },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          formatter:function(){
            return this.key+ ': ' + this.y + '%';
          }
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Composition',
      colorByPoint: true,
        innerSize: '70%',
      data: [{
        name: 'Nitrogen',
       // color: '#01BAF2',
        y: 78,
      }, {
        name: 'Oxygen',
       // color: '#71BF45',
        y: 20.9
      }, {
        name: 'Other gases',
        //color: '#FAA74B',
        y: 1.1
      }]
    }]
  });
