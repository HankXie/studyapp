/**
 * Created by xiehan on 2017/11/29.
 */
angular.module('studyApp.controllers')

  .controller('PopupCtrl', function ($scope, $rootScope,$ionicHistory,$ionicPopup,$timeout, $ionicBackdrop, $location) {
    $scope.title = '弹框效果及图片轮播';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.receiveData='';
    $scope.screenWidth = document.body.clientWidth + 'px';

    $scope.showPopup = function() {
      $scope.data = {};

      // 自定义弹窗
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.wifi">',
        title: '修改名称',
        scope: $scope,
        buttons: [
          { text: '取消' },
          {
            text: '<b>确认</b>',
            type: 'button-positive',
            onTap: function(e) {
              $scope.receiveData=$scope.data.wifi;
              console.log("$scope.receiveData",$scope.receiveData);
                myPopup.close();
            }
          }
        ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
        // myPopup.close(); // 3秒后关闭弹窗
      }, 3000);
    };

    //  confirm 对话框
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: '提示',
        template: '是否确定',
        buttons: [
          { text: '取消' },
          {
            text: '<b>确认</b>',
            type: 'button-positive',
            onTap: function(e) {
              console.log("对话框")
            }
          }
        ]
      });
    };

    //  alert（警告） 对话框
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: '警告!',
        template: '请确定后使用',
        buttons: [
          { text: '确定' ,
            type: 'button-positive'
          }
        ]
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };


    $scope.swiperImg=[
      {
        imgUrl:"img/1.jpeg",
        desc:"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
      },
      {
        imgUrl:"img/1.jpeg",
        desc:null
      },
      {
        imgUrl:"img/2.jpeg",
        desc:"33333"
      },
      {
        imgUrl:"img/1.jpeg",
        desc:"4444"
      },
      {
        imgUrl:"img/1.jpeg",
        desc:"55555"
      },
      {
        imgUrl:"img/2.jpeg",
        desc:"6666"
      }
    ];

    $scope.showModalView=false;
    $scope.openModalView = function () {
      $scope.showModalView=true;
    };
    $scope.closeModalView = function () {
      $scope.showModalView=false;
    };

    $scope.goProgress=function () {
      $scope.showModalView=false;
      $location.path('/progress');
    };
  });
