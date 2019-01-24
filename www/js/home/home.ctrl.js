/**
 * Created by xiehan on 2017/11/20.
 */
angular.module('studyApp.controllers')

  .controller('HomeController', function ($scope, $rootScope,HttpRq,$location,Storage) {
    $scope.title = '主页';

    $scope.goImgTouch=function () {
      $location.path('/img-touch');
    };

    $scope.goTimeLine=function () {
      $location.path('/timeline');
    };

    $scope.goEchart=function () {
      $location.path('/echart');
    };

    $scope.goProgress=function () {
      $location.path('/progress');
    };

    $scope.goPopup=function () {
      $location.path('/popup');
    };

    $scope.goForm=function () {
      $location.path('/form');
    };

    $scope.goLocalStorage=function () {
      $location.path('/localList');
    };

    $scope.goQrCode=function () {
      $location.path('/qrcode');
    };

    $scope.goHgApp=function () {
      $location.path('/tab');
    };

    $scope.goSqliet=function () {
      $location.path('/sqliet');
    };

    $scope.goShare=function () {
      $location.path('/share');
    };




    $scope.gotoMenu=function (url) {
      $location.path(url);
    };
    $scope.menuListChild = [];
    $scope.menuListMain=[
      {
        name:'测试1',
        role:true,
        list:[
          [
            { menu:'/sqliet', icon:'produceProgress-2',title:'123', role:true },
            { menu:'2', icon:'history-2',title:'123', role:true },
            { menu:'3', icon:'sysSetting-2',title:'123', role:false}
          ],
          [
            { menu:'/sqliet', icon:'produceProgress-2',title:'123', role:true },
            { menu:'2', icon:'history-2',title:'123', role:false },
            { menu:'3', icon:'sysSetting-2',title:'123', role:true}
          ]
        ]
      },
      {
        name:'测试2',
        role:false,
        list:[
          [
            {menu: '1', icon: 'qcmng', title: '123', role: true},
            {menu: '2', icon: 'repair-progress', title: '123', role: true},
            {menu: '3', icon: 'operatorList-2', title: '123', role: true}
          ]
        ]
      },
      {
        name:'测试3',
        role:true,
        list:[
          [
            {menu: '1', icon: 'warehourse', title: '123', role: true},
            {menu: '2', icon: 'fileupload', title: '123', role: true},
            {menu: '3', icon: 'localdata', title: '123', role: true}
          ]
        ]
      }
    ];

    $scope.menuList=[
            { menu:'/sqliet', icon:'produceProgress-2',title:'123', role:true },
            { menu:'2', icon:'history-2',title:'123', role:true },
            { menu:'3', icon:'sysSetting-2',title:'123', role:true},
            { menu:'/sqliet', icon:'produceProgress-2',title:'123', role:true },
            { menu:'2', icon:'history-2',title:'123', role:false },
            { menu:'3', icon:'sysSetting-2',title:'123', role:true}
    ];

   initMenu();
    function  initMenu() {
      menuFunc();
    }

    function menuFunc() {
      $scope.menuListChild=HttpRq.getMenuChild($scope.menuListMain[0].list);

      $scope.menuListMain=HttpRq.getMenuMain( $scope.menuListMain);
    }
    $scope.menuList = getNewRoleMenu($scope.menuList,3);
    function getNewRoleMenu(menuList,col) {//col 列数
      //将获取的原始数据对$scope.menuList赋值
      var menuList2=[];//存放获取来的有权限的菜单
      var menuList3=[[],[],[],[]];
      for(var i=0;i<menuList.length;i++){
          if(menuList[i].role){//role为true即有权限
            menuList2.push(menuList[i]);//此时的数据为一行多列的格式
          }
      }
      var ind=-1;
      for(var i=0;i<menuList2.length;i++){//将一行多列的数据处理成，多行3列的格式
        if(i%col==0){++ind;}
        var y=i%col;
        menuList3[ind][y]=menuList2[i];
      }

      for(var i=0;i<menuList3.length;i++){//处理完之后可能有的行只有两列或更少，用{}占位
        if((menuList3[i].length)%col!=0){
          var c=col-menuList3[i].length;
          for(var j=0;j<c;j++){
            menuList3[i].push({});
          }
        }
      }
      menuList=menuList3;
      return menuList;
    }


  });
