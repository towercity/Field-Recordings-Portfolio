(function(){
  var app = angular.module('album-page', []);

  app.controller('AlbumData', ['$http', function($http) {
    var self = this;
    self.playlist = {};
    self.song = 0;
    // Makes the currently playing track index global so as not to constantly move it through function calls
    self.trackIndex = 0;

    $http.get('json/playlist.json').then(function(data) {
      self.playlist = data.data;

      // Iterates through albums and adds the long desc html to the page
      self.playlist.forEach(function(album) {
        var el = '#' + album.class + '-desc';
        $(el).html(album.descLong);
      });
    }, function() {
      console.log('playlist ajax failed');
    });

    // Audio player functions

    self.initAudio = function(album, index) {
      // If a song is already playing, stops the song 
      if(self.song !== 0) {
        self.song.pause();
      }

      var track = album.tracks[index];
      self.switchSong(track.name, track.url);

      self.song.addEventListener('ended', function(){
        self.song.pause();
        self.initAudio(album, index + 1);
      });
    };

    self.switchSong = function(title, url) {
      $('.title').text(title);
      self.song = new Audio(url);
      self.song.play();
    };

    self.play = function() {
      self.song.play();
    };

    self.pause = function() {
      self.song.pause();
    };

    self.mute = function() {
      if (self.song.volume === 0) {
        self.song.volume = 1;
      } else if (self.song.volume === 1) {
        self.song.volume = 0;
      }
    };
  }]);
})();
