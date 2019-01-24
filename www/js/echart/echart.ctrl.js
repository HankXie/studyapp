/**
 * Created by xiehan on 2017/11/29.
 */
angular.module('studyApp.controllers')

  .controller('EchartCtrl', function ($scope, $rootScope, $ionicHistory,$location) {

    $scope.title = 'echart图表';

    /*
     官方实例链接：http://echarts.baidu.com/examples.html
     */

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    //用于数据的格式化
    $scope.dataList = {
      incomeData:""
    };
    // 饼图
    $scope.pieConfig = {};
    // 环形图
    $scope.donutConfig = {};

    init();

    function init() {
      initChartsConfig();
      initIncome();

      initConfigChart();

      initChartsOption()
    }


    function initChartsOption() {
      var chartOptionId = echarts.init(document.getElementById('id0002'));//div 标签id
      var  option = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //设置饼图的颜色
        color:['#f1453d','#fd9727','#785549','#b9d337','#1ebea5'],
        legend: {
          bottom: 30,
          left: 'center',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['50%', '45%'],
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chartOptionId.setOption(option);
    }

    //饼图配置初始化
    function initChartsConfig() {
      $scope.pieConfig = {
        center: [120, '50%'],
        radius: 90
      };
      $scope.donutConfig = {
        color:['#fd9727','#785549','#b9d337','#1ebea5'],
        radius: [0, 90]
      };
    }
    //饼图数据
    function initIncome(){
      var temp = [
        {
          NAME:"测试1",
          NUM:11
        },
        {
          NAME:"测试2",
          NUM:22
        },
        {
          NAME:"测试3",
          NUM:33
        },
        {
          NAME:"测试4",
          NUM:44
        }
      ];

      if (temp) {
        // 处理数据
        var temp2 = [];
        angular.forEach(temp, function (item) {
          var t = {x: item.NAME, y: item.NUM};
          temp2.push(t);
        });
        $scope.dataList.incomeData = [{
          name: 'echart饼图测试',
          datapoints: temp2
        }];
      }
    }

    //柱状图数据
    function initConfigChart() {
      var parkaccountChart = echarts.init(document.getElementById('id0001'));//div 标签id
      var seriesLabel = {
        normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2
        }
      };
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['总数1', '总数2', '总数3'],
          bottom:true
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '8%',
          top:'5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '',
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['y1', 'y2', 'y3']
        },
        series: [
          {
            name: '总数1',
            type: 'bar',
            label: seriesLabel,
            itemStyle:{
              normal:{color:'#ddd'}
            },
            data: [111,222,333]
          },
          {
            name: '总数2',
            type: 'bar',
            label: seriesLabel,
            itemStyle:{
              normal:{color:'#323232'}
            },
            data: [150, 105, 110]
          },
          {
            name: '总数3',
            type: 'bar',
            label: seriesLabel,
            itemStyle:{
              normal:{color:'#785549'}
            },
            data: [220, 82, 63]
          }
        ]
      };
      parkaccountChart.setOption(option);

    }

  });
