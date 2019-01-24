/**
 * Created by xiehan on 2017/11/28.
 */
angular.module('studyApp.controllers')

  .controller('ImgTouchCtrl', function ($scope, $sce,$rootScope,$ionicHistory, $location) {
    $scope.title = '点击放大图片';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.imgUrl={
      url:'img/1.jpeg'
    };

    initImg();

    function initImg() {
      var el = document.querySelector('div.pinch-zoom');
      new PinchZoom(el, {});
    }

  });
