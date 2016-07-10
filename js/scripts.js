//code to open modules

$('#der-mond-img').click(function() {
  $('#der-mond-modal').modal();
  methods.eraseSong();
});

$('#popular-music-img').click(function() {
  $('#popular-music-modal').modal();
  methods.eraseSong();
});

$('#fsu-img').click(function() {
  $('#fsu-modal').modal();
  methods.eraseSong();
});



//----------------------MUSIC PLAYER-------------------
//code based on tutorial at https://www.script-tutorials.com/html5-audio-player-with-playlist

var song = 0;

//methods object
var methods = {
  initAudio: function(album, index) {
    var i = parseInt(index);
    methods.switchSong(album, i);
    methods.playSong(album, i);

    //adds event listeners for fwd and rev
    $('.rev').click(function(e) {
      e.preventDefault();

      if (i !== 0) {
        i -= 1;
        song.pause();
        methods.switchSong(album, i);
        methods.playSong(album, i);
      }
    });

    $('.fwd').click(function(e) {
      e.preventDefault();

      if (index < album.tracks.length - 1) {
        i += 1;
        song.pause();
        methods.switchSong(album, i);
        methods.playSong(album, i);
      }
    });
  },
  switchSong: function(album, index) {
    var track = album.tracks[index];

    var url = track.url;
    var albumTitle = album.title;
    var trackTitle = track.name;

    //Changes the info in the player bar
    $('.title').text(trackTitle);

    //Inits song, plays
    song = new Audio(url);
  },
  playSong: function(album, index) {
    song.play();
    song.addEventListener('ended', function(){
      if (index < album.tracks.length - 1) {
        index += 1;
        song.pause();
        methods.switchSong(album, index);
        methods.playSong(album, index);
      }
    });
  },
  eraseSong: function() {
    if(song !== 0) {
      song.pause();
      song = 0;

      $('.title').text(' ');
      $('.album').text(' ');
    }
  }
};

//event listeners
$('.play').click(function(e) {
  e.preventDefault();
  song.play();
});

$('.pause').click(function(e) {
  e.preventDefault();
  song.pause();
});

$('.volume').click(function(e) {
  e.preventDefault();

  if (song.volume === 0) {
    song.volume = 1;
  } else if (song.volume === 1) {
    song.volume = 0;
  }
});

$('.song-list li').click(function(e) {
  e.preventDefault();

  var index = e.currentTarget.id;
  var album = e.currentTarget.className;

  //stops songs before playing new one
  if(song !== 0) {
    song.pause();
  }

  if (album === 'der-mond') {
    methods.initAudio(playlist.derMond, index);
  } else if (album === 'pop') {
    methods.initAudio(playlist.pop, index);
  } else if (album === 'fsu') {
    methods.initAudio(playlist.fsu, index);
  }
});
