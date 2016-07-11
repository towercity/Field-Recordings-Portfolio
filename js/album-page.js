(function(){
  var app = angular.module('album-page', []);

  app.controller('PageData', ['$http', function($http) {
    var self = this;
    self.playlist = {};

    $http.get('json/playlist.json').then(function(data) {
      self.playlist = data.data;

      // Iterates through albums and adds the long desc html to the page
      self.playlist.forEach(function(album) {
        var el = '#' + album.class + '-desc';
        $(el).html(album.descLong);
      });
    }, function() {
      console.log('plyalist ajax failed');
    });
  }]);
})();
