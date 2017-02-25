$("document").ready(function(){
     Highcharts.chart('chart-data', {
         chart: {
             type: 'column'
         },
         title: {
             text: 'Treatment Cascade'
         },
         xAxis: {
             categories: ['Esimated Number of PLHIV', 'Number of Alive PLHIV', 'Linked To HIV care', 'PLHIV Received ART']
         },
         yAxis: {
             min: 0,
             title: {
                 text: 'Number Of People'
             },
             stackLabels: {
                 enabled: true,
                 style: {
                     fontWeight: 'bold',
                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                 }
             }
         },
         legend: {
             align: 'right',
             x: -30,
             verticalAlign: 'top',
             y: 25,
             floating: true,
             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
             borderColor: '#CCC',
             borderWidth: 1,
             shadow: false
         },
         tooltip: {
             headerFormat: '<b>{point.x}</b><br/>',
         },
         plotOptions: {
             column: {
                 stacking: 'normal',
                 dataLabels: {
                     enabled: false,
                     color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                 }
             }
         },
         series: [{
         		name: 'Records',
             data: [39397,22267, 20307, 11922]
         }]
     });
});
