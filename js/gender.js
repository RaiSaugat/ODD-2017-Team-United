$(document).ready(function(){
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
                color: (Highcharts.theme && Highcharts.theme.textColor) || '#333 '
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
           },
       },
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

$(".dropdown-menu").find('.mode').on("click", function(){
     $("html, body").animate({
          scrollTop: $(".data-table").offset().top
     },800);
     $(".age").children().removeClass("active-color");
     $(".year").children().addClass("active-color");
     $("#chart-data-second").css("display","none");
     $('.gender').children().removeClass("active-color");
$("#chart-data").addClass("chart-data");
Highcharts.chart('chart-data', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' Reported HIV Cases by Mode of Transmission in Nepal, 2010-2016 July '
    },
    xAxis: {
        categories: ['2010' , '2011', '2012', '2013' ,'2014', '2015', '2016 (JanJuly)']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Unidentified',
        data: [0, 0, 0, 0,35,29,28]
    }, {
        name: 'Mother to child',
        data: [8.5, 9.2, 10, 11,0,0,0]
    }, {
        name: 'Blood or blood products',
        data: [0.5, 0.3, 1, 1,1,0.5,0]
    }, {
        name: 'Unsafe Injecting Behaviour',
        data: [6, 3, 4, 3,2,2,1.5]
    }
    , {
        name: 'Unsafe Sexual behaviour',
        data: [85, 87, 85, 85,62,65,67]
    }]
});
});

$(".dropdown-menu").find('.test').on("click", function(){
     $("html, body").animate({
          scrollTop: $(".data-table").offset().top
     },800);
     $(".age").children().removeClass("active-color");
     $(".year").children().addClass("active-color");
     $("#chart-data-second").css("display","none");
     $('.gender').children().removeClass("active-color");
$("#chart-data").addClass("chart-data");
Highcharts.chart('chart-data', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'HIV Testing and Yield Proportion Region Wise, 2015'
    },
    xAxis: {
        categories: ['Far-Western', 'Mid-Western', 'Western', 'Central', 'Eastern']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Tested'
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
        name: 'Tested For HIV',
        data: [36032,29289,37123,36491,25116]
    }, {
        name: 'HIV +ve',
        data: [216,117,371,694,226]
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
     $(".dropdown-menu").find(".male-migrants").on("click", function(){
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
        type: 'column'
    },
    title: {
        text: 'Intervention-Male Labour Migrants'
    },
    xAxis: {
        categories: [
            '070/071',
            '071/072',
            '072/073'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Condom Distributed',
        data: [2991704,1340286,1578039]

    }, {
        name: 'HIV Tested And Counseled',
        data: [42679,40623,103667]

    }]
});
     });


     $(".dropdown-menu").find(".female-workers").on("click", function(){
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
        type: 'column'
    },
    title: {
        text: 'Intervention-Female Sex Workers'
    },
    xAxis: {
        categories: [
            '070/071',
            '071/072',
            '072/073'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Condom Distributed',
        data: [3434421,4712296,4204696]

    }, {
        name: 'HIV Tested And Counseled',
        data: [9970,10006,9765]

    }]
});
     });

});
