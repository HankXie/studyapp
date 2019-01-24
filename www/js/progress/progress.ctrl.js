/**
 * Created by xiehan on 2017/11/29.
 */
angular.module('studyApp.controllers')

  .controller('ProgressCtrl', function ($scope, $rootScope, $ionicHistory,$timeout,$location) {
    $scope.title = '进度条效果';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    var dataInfo=[
      {
        NAME:"测试1",
        NUM:30,
        RATE:30
      },
      {
        NAME:"测试2",
        NUM:25,
        RATE:25
      },
      {
        NAME:"测试3",
        NUM:45,
        RATE:45
      }
    ];

    handleTabData(dataInfo);

    function handleTabData(data){
      var widthData=[];
      for(var i = 0;i<data.length;i++){
        widthData.push({
          width:data[i].RATE+'%',       //进度条百分比
          name:data[i].NAME,            //标题
          sum:data[i].NUM,              //数量
          percent:data[i].RATE+'%'});   //百分比
      }
      $scope.handleDataInfo = widthData;
      // $timeout(function() {
      //   jQuery('.skillbar').each(function(){
      //     jQuery(this).find('.skillbar-bar').animate({
      //       width:jQuery(this).attr('data-percent')
      //     },1000);
      //   });
      // });
    }



  });
