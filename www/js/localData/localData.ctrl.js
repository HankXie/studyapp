/**
 * Created by xiehan on 2017/12/8.
 */
angular.module('studyApp.controllers')

  .controller('localDataCtrl', function ($scope, $rootScope,$ionicHistory,LocalData,$filter,$ionicScrollDelegate,$timeout, $location) {
    $scope.title = '明细';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.storage = [];//本地存储数据
    $scope.searchData = {
      date: $filter('date')(new Date(),'yyyy-MM-dd'),
      abstract:'',
      buyThings:'',
      num:'',
      price:'',
      pay:'',
      in:'',
      out:'',
      money:''
    };

    $scope.$watch('searchData', function (newV, olV) {
      console.log("searchData------>",$scope.searchData);
    }, true);

    $scope.setInputInfo = function () {
      console.log("---点击---",$scope.searchData);
      LocalData.setLastSearchTeam({
        date:$scope.searchData.date,
        abstract: $scope.searchData.abstract,
        buyThings: $scope.searchData.buyThings,
        num: $scope.searchData.num,
        price: $scope.searchData.price,
        pay: $scope.searchData.pay,
        in: $scope.searchData.in,
        out: $scope.searchData.out,
        money:$scope.searchData.money

        });
      $scope.goBack();
    };







  });
