/**
 * Created by xiehan on 2017/11/28.
 */
angular.module('studyApp.controllers')

  .controller('ShareCtrl', function ($scope, $sce,$rootScope,  $cordovaSocialSharing,$ionicHistory, $location) {
    $scope.title = '分享测试';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.shareAnywhere = function(message,subject,image,link) {
      $cordovaSocialSharing.share(message,subject,image,link);
    };

    $scope.shareViaTwitter = function(message, image, link) {
      $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link);
      }, function(error) {
        alert("Cannot share on Twitter");
      });
    };



  });
