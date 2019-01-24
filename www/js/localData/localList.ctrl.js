/**
 * Created by xiehan on 2017/12/8.
 */
angular.module('studyApp.controllers')

  .controller('localListCtrl', function ($scope, $rootScope,$ionicHistory,LocalData,$filter,$ionicScrollDelegate,$timeout, $location) {
    // $scope.title = '南京备用金对账单';
    $scope.title = '本地存储';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.goLocalStorageData=function () {
      $location.path('/localData');
    };

    $scope.storage = [];//本地存储数据
    $scope.storageData=[];
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

    $scope.$on("$ionicView.enter", function (event, data) {
      getStorageDataList();
    });

    // 设置数据
    function getStorageDataList() {
      storageInfo(getStorageData());
    }

    $scope.setInputInfo = function () {
      console.log("---点击---",$scope.searchData);
      LocalData.setLastSearchTeam({
        date:$scope.searchData.date,
        things: $scope.searchData.things
      });
    };

    function storageInfo(data) {
      if (data != undefined) {
        $scope.storage = data;
      }

      for (var i=$scope.storage.length-1;i>=0;i--){
        var item=$scope.storage[i];
        $scope.storageData=$scope.storageData.concat(item);

      }
      console.log("---获取---",data);

    }

    //获得历史数据
    function getStorageData() {
      return LocalData.getRecentSearchTeam();
    }







  });
