(function(){
  var app = angular.module('album-page', []);

  app.controller('PageData', ['$http', function($http) {
    var self = this;
    self.playlist = {};

    $http.get('json/playlist.json').then(function(data) {
      self.playlist = data.data;
    }, function() {
      console.log('fail');
    });
  }]);
})();
