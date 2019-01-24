
angular.module('studyApp.services')
  .factory('HttpRq', function (Conf,Storage, $http) {
    return {
      //post请求
      post: function (_reqUri, _opt, _okfn, _failfn) {
        var reqUrl = Conf.API.HOST + _reqUri;
          $http({
            url: reqUrl,
            method:'post',
            data: _opt,
            headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
          }).success(function(result){
            if (_okfn && typeof _okfn === "function") {
              _okfn(result);
            }
          }).error(function(err){
            if (_failfn && typeof _failfn === "function") {
              _failfn(err);
            }
          });
        },

      get: function(_reqUri,_okfn, _failfn) {
        var reqUrl = Conf.API.HOST + _reqUri;
        $http({
          url: reqUrl,
          method:'get',
          headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        }).success(function(result){
          if (_okfn && typeof _okfn === "function") {
            _okfn(result);
          }
        }).error(function(err){
          if (_failfn && typeof _failfn === "function") {
            _failfn(err);
          }
        });
      },

      /**
       * 菜单数据格式为一个二维数组的格式如：[[],[],[]]，里层有几个[]代表有几行，[]中为对象格式{}
       */
      getMenuChild:function (menuList) {
        if(!menuList){
         menuList=[
          [
            { menu:'/sqliet', icon:'produceProgress-2',title:'123', role:false },
            { menu:'2', icon:'history-2',title:'123', role:true },
            { menu:'3', icon:'sysSetting-2',title:'123', role:true}
          ],
          [
            { menu:'1', icon:'qcmng',title:'123', role:true },
            { menu:'2', icon:'repair-progress',title:'123', role:true },
            { menu:'3', icon:'operatorList-2',title:'123', role:true }
          ],
          [
            { menu:'1', icon:'warehourse',title:'123', role:true },
            { menu:'2', icon:'fileupload',title:'123', role:true },
            { menu:'3', icon:'localdata',title:'123', role:true }
          ]
        ];
        }

        if(Storage.get("menulist")){//首先判断是否已经有缓存记录，如果有取缓存记录，若没有重新获取
          menuList=JSON.parse(JSON.stringify(Storage.get("menulist")));
        }else{
          //将获取的原始数据对$scope.menuList赋值
          var menuList2=[[]];//存放获取来的有权限的菜单
          var menuList3=[[],[],[],[]];
          for(var i=0;i<menuList.length;i++){
            for(var j=0;j<menuList[i].length;j++){
              if(menuList[i][j].role){//role为true即有权限
                menuList2[0].push(menuList[i][j]);//此时的数据为一行多列的格式
              }
            }
          }
          var ind=-1;
          for(var i=0;i<menuList2[0].length;i++){//将一行多列的数据处理成，多行3列的格式
            if(i%3==0){
              ++ind;
            }
            var y=i%3;
            menuList3[ind][y]=menuList2[0][i];
          }

          for(var i=0;i<menuList3.length;i++){//处理完之后可能有的行只有两列或更少，用{}占位
            if((menuList3[i].length)%3!=0){
              var c=3-menuList3[i].length;
              for(var j=0;j<c;j++){
                menuList3[i].push({});
              }
            }
          }
          menuList=menuList3;
          Storage.set("menulist",menuList);
        }

        return menuList;

      },

      getMenuMain:function (menuList) {
        var newmenulist=[];
        for(var i=0;i<menuList.length;i++){
          if(menuList[i].role){
            newmenulist.push(menuList[i]);
          }
        }
        return newmenulist;
      }
    };




  });

