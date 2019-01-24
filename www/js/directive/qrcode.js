/**
 * Created by xiehan on 2017/12/13.
 */
angular.module('studyApp.directives')
  .directive('qrcode', function ($compile,$timeout) {
    return {
      restrict: 'AE',
      scope: {
        url: '='
      },
      template: ' <div style="display: flex;align-items: center;justify-content: center;margin-top: 10px;">'+
      '<div id="qrcode""></div></div>',
      replace: true,
      transclude: true,
      link: function ($scope, element, attrs) {
        $compile(element.contents())($scope);

        //初始化二维码样式
        var qrcode = new QRCode(document.getElementById("qrcode"), {
          width: 200,
          height: 200,
          colorDark : '#000000', // 前景色
          colorLight : '#ffffff', // 背景色
          correctLevel : QRCode.CorrectLevel.H //L M Q H
        });

        qrcode.makeCode($scope.url);

      }
    }
  });
