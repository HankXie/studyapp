/**
 * Created by xiehan on 2017/11/28.
 */
angular.module('studyApp.controllers')

  .controller('TimeLineCtrl', function ($scope, $rootScope,$ionicHistory, $location) {
    $scope.title = '时间轴';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    makeData();

    function makeData() {
      $scope.teamDataList=[

        {
          hour:"12:00",
          data:[
            {
              customerName:"中国国旅（江苏）国际旅行社有限公司",
              reserveNumber:"12",
              id:"aaaabbb12112"
            },
            {
              customerName:"江苏2",
              reserveNumber:"122",
              id:"aaaabbb12112"
            }
          ]
        },
        {
          hour:"13:00",
          data:[{
            customerName:"江苏2",
            reserveNumber:"112",
            id:"aaaabbb12112"
          }]

        },
        {
          hour:"14:00",
          data:[{
            customerName:"江苏3",
            reserveNumber:"12",
            id:"aaaabbb12112"
          }]

        },
        {
          hour:"13:00",
          data:[{
            customerName:"江苏2",
            reserveNumber:"112",
            id:"aaaabbb12112"
          }]

        },
        {
          hour:"14:00",
          data:[{
            customerName:"江苏3",
            reserveNumber:"12",
            id:"aaaabbb12112"
          }]

        }
      ];

    }

  });
