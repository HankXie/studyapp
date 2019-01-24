/**
 * Created by xiehan on 2017/12/7.
 */
angular.module('studyApp.controllers')

  .controller('SqlietCtrl', function ($scope, $rootScope,$ionicHistory,$ionicScrollDelegate,$timeout, $location,$cordovaSQLite,$cordovaToast) {
    $scope.title = '本地数据库';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.addData={
      unitno:'',
      unitname :'',
      fullname:'',
      parunit:''
    };

    $scope.dataList=[];

    function  init() {
      $scope.select();
    }

    //监听 审核信息参数
    $scope.$watch('addData', function (newV, olV) {
      console.log("addData------>",$scope.addData);
    }, true);

    $scope.insert = function(){         //外面传进来的参数
      var query = "INSERT INTO dept (unitno, unitname ,fullname, parunit) VALUES (?,?,?,?)";
      $cordovaSQLite.execute(sqldb, query, [$scope.addData.unitno, $scope.addData.unitname,$scope.addData.fullname,$scope.addData.parunit]).then(function(res) {
        console.log("INSERT ID -> " + res.insertId);
        $cordovaToast.showShortCenter("插入成功！");
      }, function (err) {
        $cordovaToast.showShortCenter("插入失败："+err);
      });
    }

    $scope.delete = function(id){
      console.log("删除---"+id);
      var query = "delete from dept where unitno=?";
      $cordovaSQLite.execute(sqldb, query, [id]).then(function(res) {
        console.log("delete ID -> " + res.insertId);
        $cordovaToast.showShortCenter("删除成功！");
        $scope.select();
      }, function (err) {
        $cordovaToast.showShortCenter("删除失败："+err);
      });
    }

    $scope.update = function(id){
      console.log("修改---"+id);
    }


      $scope.select = function(){         //外面传进来的参数
      var query = "select * from dept limit ?,?";
      $cordovaSQLite.execute(sqldb, query, [0,100]).then(function(res) {

        var result = [];
        if(res) {
          if (res.rows.length > 0) {
            var resRows = res.rows;
            for (var i = 0; i < resRows.length; i++) {
              var t = resRows.item(i);
              var j = {"unitno": t['unitno'], "unitname": t['unitname'],"fullname": t['fullname'], "parunit": t['parunit']};
              result.push(t);
            }
            $scope.dataList=result;
          }else {
            $cordovaToast.showShortCenter("当前无记录！");
          }
        }else {
          $cordovaToast.showShortCenter("查询失败！");
        }
      }, function (err) {
        $cordovaToast.showShortCenter("查询失败："+err);
      });
    }





  });
