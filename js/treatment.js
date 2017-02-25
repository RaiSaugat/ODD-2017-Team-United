$("document").ready(function(){
     Highcharts.chart('chart-data', {
         chart: {
             type: 'column'
         },
         title: {
             text: 'Treatment Cascade by 2016'
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
     $(".dropdown-menu").find(".treatment").on("click", function(){
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
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
                          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
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
     $(".dropdown-menu").find(".art").on("click",function(){
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'ART on basis of Gender , 2015'
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    fontSize: '20px'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 52.4
        }, {
            name: 'Female',
            y: 47.3,
            sliced: true,
            selected: true
        }, {
            name: 'Transgender',
            y: 0.25
        }]
    }]
});
     });

     $(".dropdown-menu").find(".treatment").on("click", function(){
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
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
     $(".dropdown-menu").find(".pmtct").on("click",function(){
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'PMTCT Statistics 2016'
    },
    xAxis: {
        categories: ['Hiv Pregnant Woman', 'Delievires', 'Mother Received ART', 'Baby Received Prophylaxis']
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
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
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
        name: 'Record',
        data: [105, 77, 101, 74]
    }]
});
     });


     $(".dropdown-menu").find(".finance").on("click",function(){
          $("html, body").animate({
               scrollTop: $(".data-table").offset().top
          },800);
          Highcharts.chart('chart-data', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'AIDS Spending by financing sources'
    },
    xAxis: {
        categories: ['2006', '2007', '2009']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'US$ in Millions'
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
        name: 'Domestic',
        data: [0.21,0.62,0.26]
    }, {
        name: 'International',
        data: [8.68,17.04,19.71]
    }, ]
});
     });

$(".dropdown-menu").find(".fast-track").on("click", function(){
     Highcharts.chart('chart-data', {

    title: {
        text: 'Trend of New infection and  Death (2000-2020) '
    },



    yAxis: {
        title: {
            text: 'Numbers'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2000
        }
    },

    series: [{
        name: 'New Infection',
        data: [9661,10328,10097,9168,7766,6227,4805,3718,2813,2078,1751,1437,1088,825,662,534,500,480,460,450,400]
    }, {
        name: 'Death',
        data: [500,800,1200,1300,1500,1550,1600,1650,1700,1751,1900,2000,2000,1900,1800,1800,1500,1000,460,350,250]
    }]

});
});
});
