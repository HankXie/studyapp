/**
 * Created by xiehan on 2017/11/20.
 */
angular.module('studyApp.controllers')

  .controller('TabCtrl', function ($scope, $rootScope, $ionicHistory,Conf,$http,HttpRq, $ionicSlideBoxDelegate,$location) {
    $scope.title = '亨格app页面测试';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    /** Tab页滑动 -- START **/
    $scope.tabNames=['tab1','tab2'];
    $scope.slectIndex = 0;
    $scope.activeSlide = function(index){//点击时候触发
      $scope.slectIndex = index;
      $ionicSlideBoxDelegate.slide(index);
    };
    $scope.slideChanged = function(index){//滑动时候触发
      $scope.slectIndex = index;
    };
    $scope.pages=['templates/tab1.html','templates/tab2.html'];

    $scope.reopt={opt:"南京"};

    getWeatherinfo($scope.reopt.opt);
    function getWeatherinfo(opt) {
      HttpRq.get(Conf.API.HOST+'weatherApi?city='+opt,
        function(res){
          var result = typeof res == 'string' ? JSON.parse(res) : res;
          var data = result.data;
          console.log("data================"+JSON.stringify(data));
        }, function(err){

        });
    }
    getImage();
    $scope.imgdata=[];
    function getImage() {
      HttpRq.get(Conf.API.HOST+'/meituApi?page=1',
        function(res){
          var result = typeof res == 'string' ? JSON.parse(res) : res;
          var data = result.data;
          $scope.imgdata=data;
          console.log("data================"+JSON.stringify(data));
        }, function(err){

        });
    }

  });
