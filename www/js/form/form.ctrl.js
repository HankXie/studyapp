/**
 * Created by xiehan on 2017/12/7.
 */
angular.module('studyApp.controllers')

  .controller('FormCtrl', function ($scope, $rootScope,$ionicHistory,$ionicScrollDelegate,$timeout, $location) {
    $scope.title = '表单';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.addData={
      name1:"",
      name2:"",
      name3:"1245678910111213141516171819202122233213121222222",
      name4:"1245678910111213141516121321231321",
      supResultsInfo:[
        {result1: "", result2: ""},
        {result1: "", result2: ""},
        {result1: "", result2: ""}
        ]
    };


    $scope.inputChanged=function () {
          console.log("$scope.addData",$scope.addData);
    };

    //add
    $scope.addArr = function () {
      var viewDepartData = {result1: "", result2: ""};
      $scope.addData.supResultsInfo.push(viewDepartData);
      resize();
    };
    //delete
    $scope.deleteArr = function (index) {
      $scope.addData.supResultsInfo.splice(index, 1);
      resize();
    };

    //监听 审核信息参数
    $scope.$watch('scenicSelect', function (newV, olV) {
      console.log("scenicSelect------>",$scope.scenicSelect);
    }, true);


    function resize() {
      // 内容高度
      $timeout(
        function () {
          $ionicScrollDelegate.$getByHandle('add_scroll_content').resize();
        }
      );
    }

    $scope.scenicList=[
      {
        NAME:"Ana Trujillo Emparedados y helados",
        ID:"0001"
      },
      {
        NAME:"测试2",
        ID:"0002"
      },
      {
        NAME:"测试3",
        ID:"0003"
      },
      {
        NAME:"测试4",
        ID:"0004"
      },
      {
        NAME:"测试5",
        ID:"0005"
      }
    ];

    $scope.scenicSelect={
      NAME:"",
      ID:""
    };

  });
