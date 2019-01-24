/**
 * Created by xiehan on 2017/12/8.
 */
angular.module('studyApp.services')
  .factory('LocalData', function ($q, Conf,Storage) {
    var searchData=[];
    return {
      /**
       * 获取数据
       */
      getRecentSearchTeam: function () {
        return Storage.get("local_data");
      },

      /**
       * 设置最新的数据
       */
      setLastSearchTeam: function (data) {
        if (data == undefined) return;
        searchData = searchData.concat(data);
        Storage.set("local_data", searchData);

      }


    };




  });
