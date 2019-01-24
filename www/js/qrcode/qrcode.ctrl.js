/**
 * Created by xiehan on 2017/12/13.
 */
angular.module('studyApp.controllers')

  .controller('QrCodeCtrl', function ($scope, $sce,$rootScope,$ionicHistory, $location) {
    $scope.title = '二维码生成';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.urlData={
      url:''
    };

    //初始化二维码宽高
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 200,
      height: 200,
      colorDark : '#000000', // 前景色
      colorLight : '#ffffff', // 背景色
      correctLevel : QRCode.CorrectLevel.H //L M Q H
    });

    $scope.qrCode=function(){
      qrcode.makeCode($scope.urlData.url);
    };


  });
