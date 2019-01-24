/**
 * Created by xiehan on 2017/12/8.
 * 柱状图动态加载指令
 */
angular.module('studyApp.directives')
  .directive('progressPer', function ($compile,$timeout) {
    return {
      restrict: 'AE',
      scope: {
        progressData: '='
      },
      template: ' <div class="progress-main" ng-repeat="item in progressData">'+
      '<div class="progress-data">'+
      '<span>{{item.name}}</span>'+
      '<div class="skillbar clearfix " data-percent={{item.width}}>'+
        '<div class="skillbar-bar"></div>'+
          '<div class="skill-bar-percent">{{item.sum}}</div>'+
        '</div>'+
      '</div>'+
      '<p class="progress-rate">{{item.percent}}</p>'+
      '</div>',
      replace: true,
      transclude: true,
      link: function (scope, element, attrs) {
        $compile(element.contents())(scope.$new());

        $timeout(function() {
          jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
              width:jQuery(this).attr('data-percent')
            },1000);
          });
        });

      }
    }
  });
