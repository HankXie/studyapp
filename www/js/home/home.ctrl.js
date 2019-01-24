/**
 * Created by xiehan on 2017/11/20.
 */
angular.module('studyApp.controllers')

  .controller('HomeController', function ($scope, $rootScope,HttpRq,$location,Storage) {
    $scope.title = '主页';

    $scope.goToPage=function (url) {
      $location.path(url);
    };

    $scope.menus=[
      {title:"点击放大图片", url:"/img-touch",role:true},
      {title:"时间轴", url:"/timeline",role:true},
      {title:"echart图表效果", url:"/echart",role:true},
      {title:"进度条效果", url:"/progress",role:true},
      {title:"弹框效果及图片轮播", url:"/popup",role:true},
      {title:"表单", url:"/form",role:true},
      {title:"本地存储", url:"/localList",role:true},
      {title:"二维码生成", url:"/qrcode",role:true},
      {title:"tab页面测试", url:"/tab",role:true},
      {title:"本地数据库Sqliet", url:"/sqliet",role:true},
      {title:"分享", url:"/share",role:true},
      {title:"菜单定制", url:"/menu",role:true}
    ];


    $scope.menus = getNewRoleMenu($scope.menus,3);
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
