// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var sqldb = null;
angular.module('studyApp', [
  'ionic',
  'ngCordova',
  'angular-timeline',
  'angular-echarts',
  'studyApp.controllers',
  'studyApp.services',
  'studyApp.directives'

])

  .constant('Conf', {
    DEBUG: true,
    API: {
      HOST: 'https://www.apiopen.top/'
    }
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        cache: false,
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })

      .state('img-touch', {
        cache: false,
        url: '/img-touch',
        templateUrl: 'templates/img-touch.html',
        controller: 'ImgTouchCtrl'
      })

      .state('share', {
        cache: false,
        url: '/share',
        templateUrl: 'templates/share.html',
        controller: 'ShareCtrl'
      })

      .state('timeline', {
        cache: false,
        url: '/timeline',
        templateUrl: 'templates/timeline.html',
        controller: 'TimeLineCtrl'
      })

      .state('echart', {
        cache: false,
        url: '/echart',
        templateUrl: 'templates/echart.html',
        controller: 'EchartCtrl'
      })

      .state('progress', {
        cache: false,
        url: '/progress',
        templateUrl: 'templates/progress.html',
        controller: 'ProgressCtrl'
      })

      .state('popup', {
        cache: false,
        url: '/popup',
        templateUrl: 'templates/popup.html',
        controller: 'PopupCtrl'
      })

      .state('form', {
        cache: false,
        url: '/form',
        templateUrl: 'templates/form.html',
        controller: 'FormCtrl'
      })

      .state('localData', {
        cache: false,
        url: '/localData',
        templateUrl: 'templates/localData.html',
        controller: 'localDataCtrl'
      })

      .state('localList', {
        cache: false,
        url: '/localList',
        templateUrl: 'templates/localList.html',
        controller: 'localListCtrl'
      })

      .state('qrcode', {
        cache: false,
        url: '/qrcode',
        templateUrl: 'templates/qrcode.html',
        controller: 'QrCodeCtrl'
      })

      .state('tab', {
        cache: false,
        url: '/tab',
        templateUrl: 'templates/tab.html',
        controller: 'TabCtrl'
      })

      .state('sqliet', {
        cache: false,
        url: '/sqliet',
        templateUrl: 'templates/sqliet.html',
        controller: 'SqlietCtrl'
      })

      .state('menu', {
        cache: false,
        url: '/menu',
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
      })

    ;

    //otherwise defined at  default.routes.js
    $urlRouterProvider.otherwise("/home");
  })

  .run(function ($ionicPlatform,$rootScope, $location,$cordovaToast, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      //sqlite 本地数据缓存
      if (window.cordova) {
        try{
          sqldb = $cordovaSQLite.openDB({ name: "my.db", location: 'default'});
          $cordovaSQLite.execute(sqldb, "DROP TABLE IF EXISTS dept");
          $cordovaSQLite.execute(sqldb, "CREATE TABLE IF NOT EXISTS dept (unitno text primary key, unitname text, fullname text, parunit text)");
        }catch(e){
          //$cordovaToast.showShortCenter("Init db error:" + e.name + ": " + e.message);
          console.log("创建失败+++"+e.name+e.message);
        }
      }else{
        sqldb = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100);//browser
      }


    });

    //双击退出
    $ionicPlatform.registerBackButtonAction(function(e) {
      //判断处于哪个页面时双击退出
      var $thisPath = $location.path();
      if ('/home' == $thisPath) {
        if ($rootScope.backButtonPressedOnceToExit) {
          ionic.Platform.exitApp();
        } else {
          $rootScope.backButtonPressedOnceToExit = true;
          $cordovaToast.showShortCenter('再按一次退出系统');
          setTimeout(function() {
            $rootScope.backButtonPressedOnceToExit = false;
          }, 2000);
        }
      } else {
        history.go(-1);
      }
      e.preventDefault();
      return false;
    }, 101);


  });

angular.module('studyApp.controllers', ['studyApp.services']);
angular.module('studyApp.services', []);
angular.module('studyApp.directives', []);
