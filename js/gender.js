$(document).ready(function(){
     $(".ribbon").on("click", function(){
          var data = [
        {
            "hc-key": "np-750",
            "value": 0
        },
        {
            "hc-key": "np-751",
            "value": 1
        },
        {
            "hc-key": "np-752",
            "value": 2
        },
        {
            "hc-key": "np-753",
            "value": 3
        },
        {
            "hc-key": "np-754",
            "value": 4
        },
        {
            "hc-key": "np-755",
            "value": 5
        },
        {
            "hc-key": "np-756",
            "value": 6
        },
        {
            "hc-key": "np-757",
            "value": 7
        },
        {
            "hc-key": "np-354",
            "value": 8
        },
        {
            "hc-key": "np-1278",
            "value": 9
        },
        {
            "hc-key": "np-746",
            "value": 10
        },
        {
            "hc-key": "np-747",
            "value": 11
        },
        {
            "hc-key": "np-748",
            "value": 12
        },
        {
            "hc-key": "np-749",
            "value": 13
        }
    ];

    // Initiate the chart
    $('#chart-data').highcharts('Map', {

        title : {
            text : 'HIV '
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/np/np-all.js">Nepal</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/np/np-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
     });
     	$(".dropdown-menu").find('.reported').on("click", function() {
               $("html, body").animate({
                    scrollTop: $(".data-table").offset().top
               },800);
               $(".gender").children().addClass("active-color");
               $(".age").children().removeClass("active-color");
               $(".year").children().removeClass("active-color");
               $("#chart-data-second").css("display","none");
               $(".data-table").removeClass("chart-data-second");
               Highcharts.chart('chart-data', {
    chart: {
         backgroundColor:'white'
         ,
      style: {
         fontFamily: '\'Raleway\', sans-serif'
      },
      plotBorderColor: '#606063',
        type: 'column'
    },
    title: {
        text: 'Distribution of Reported HIV Cases 2015',
        style: {
             color:"#333"
        },
    },
    xAxis: {
        categories: ['FWDR', 'MWDR', 'WDR', 'CDR', 'EDR'],
        labels:{
          style: {
               fontSize: '20px'
          },
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Infected',
            style: {
                 fontSize: '18px'
            }
        },
        labels:{
          style:{
                    fontSize:'18px',
          },
        },
        stackLabels: {
            enabled: true,
            style: {
               fontSize: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
            }
        }
    },
    legend: {
        align: 'right',
        x: -10,
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
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Male',
        data: [1391, 739, 1975, 3351, 1078]
    }, {
        name: 'Female',
        data: [1171,580,1468,2073,665]
    }, {
        name: 'Transgender',
        data: [6,5,6,36,17]
    }]
});
     });

     	$(".dropdown-menu").find('.estimated').on("click", function(){
               $("html, body").animate({
                    scrollTop: $(".data-table").offset().top
               },800);
               $(".age").children().removeClass("active-color");
               $(".year").children().addClass("active-color");
               $("#chart-data-second").css("display","none");
               $('.gender').children().removeClass("active-color");
          $("#chart-data").addClass("chart-data");
          Highcharts.chart('chart-data', {
    title: {
        text: 'Estimated New HIV Infection (1990-2016)'
    },

    subtitle: {
         text:"IBBB"
    },

    yAxis: {
        title: {
            text: 'New HIV Infection'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1990
        }
    },

    series: [{
        name: 'Infection Rate',
        data: [8,32,71,196,400,768,1494,2882,4975,6845,7512,7448,7260,7179,6590,5445,4132,3887,3305,2650,2338,2157,1819,1560,2228,1480,2163]
    }]
     });
});

	$(".dropdown-menu").find('.report').on("click",function(){
          $("report").addClass("active");
          $(".year").children().addClass("active-color");
          $('.gender').children().removeClass("active-color");
          $(".age").children().removeClass("active-color");
          $("#chart-data-second").css("display","none");
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {

         chart: {
             type: 'column'
         },

         title: {
             text: 'Estimated Number of Infection'
         },

         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'middle',
         },

         xAxis: {
             categories: ['2013', '2014', '2015', '2016']
         },

         yAxis: {
             allowDecimals: false,
             min: 0,
             title: {
                 text: 'Infected',
            },
            stackLabels: {
               enabled: true,
               style: {
                   fontSize: '18px',
               }
          },
         },

         tooltip: {
             formatter: function () {
                 return '<b>' + this.x + '</b><br/>'
                     +  this.y + '<br/>';
             }
         },

         plotOptions: {
             column: {
                 stacking: 'normal'
             }
         },

         series: [{
              name: 'Infected',
             data: [28865,26702, 25222, 22994],
         }]
     });
});

	$(".dropdown-menu").find('.adults').on("click",function(){
          $(".age").children().addClass("active-color");
          $('.gender').children().removeClass("active-color");
          $('.year').children().removeClass("active-color");
          $("#chart-data-second").css("display","block");
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {
    chart: {
         backgroundColor:'white',
      style: {
         fontFamily: '\'Raleway\', sans-serif',
      },
      plotBorderColor: '#606063',
        type: 'column'
    },
    title: {
        text: 'HIV Population: Child(0-14) '
    },
    xAxis: {
        categories: ['2010', '2011', '2012', '2013', '2014','2015'],
        labels:{
          style: {
               fontSize: '18px',
          },
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Infected',
            style: {
                 fontSize: '18px'
            }
        },
        labels:{
          style:{
                    fontSize:'18px',
          },
        },
        stackLabels: {
            enabled: true,
            style: {
               fontSize: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
            }
        }
    },
    legend: {
        align: 'right',
        x: -10,
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
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Male',
         data: [1934,1952,1913,1851,1764,1653]
    }, {
        name: 'Female',
        data: [1834,1852,1815,1757,1675,1570]
    }]
     });

     Highcharts.chart('chart-data-second', {

chart: {
    backgroundColor:'white'
    ,
style: {
    fontFamily: '\'Raleway\', sans-serif'
},
plotBorderColor: '#606063',
   type: 'column'
},
title: {
   text: 'HIV Population: Child(15+) '
},
xAxis: {
   categories: ['2010', '2011', '2012', '2013', '2014','2015'],
   labels:{
     style: {
          fontSize: '18px'
     },
   },
},
yAxis: {
   min: 0,
   title: {
       text: 'Total Infected',
       style: {
            fontSize: '18px'
       }
   },
   labels:{
     style:{
               fontSize:'18px',
     },
   },
   stackLabels: {
       enabled: true,
       style: {
          fontSize: '18px',
           color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
       }
   }
},
legend: {
   align: 'right',
   x: -10,
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
   pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
   column: {
       stacking: 'normal',
       dataLabels: {
           enabled: true,
           color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
       }
   }
},
series: [{
   name: 'Male',
    data: [16001,14989,14263,13754,13365,13116]
}, {
   name: 'Female',
   data: [34046,31495,29630,28280,27200,26410]
}]
});
     });


     $(".dropdown-menu").find('.all').on("click",function(){
          $(".age").children().addClass("active-color");
          $('.gender').children().removeClass("active-color");
          $('.year').children().removeClass("active-color");
          $("#chart-data-second").css("display","none  ");
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Estimated HIV Infection, 2015'
    },

    xAxis: {
        categories: ['0-14', '15-24', '25-49', '50+']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Infection',
            style: {
                fontSize: '18px'
           }
       }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Male',
        data: [815,875,16967,5792],
        stack: 'male'
    }, {
        name: 'Female',
        data: [774,905,11328,1941],
        stack: 'female'
    },
    {
        name: 'Transgender',
        data: [0,26,62,4],
        stack: 'transgender'
    }]
});
     });
});
