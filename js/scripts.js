//code to open modules

$('#der-mond-img').click(function() {
  $('#der-mond-modal').modal();
});

$('#popular-music-img').click(function() {
  $('#popular-music-modal').modal();
});

$('#fsu-img').click(function() {
  $('#fsu-modal').modal();
});



//----------------------MUSIC PLAYER-------------------
//code based on tutorial at https://www.script-tutorials.com/html5-audio-player-with-playlist

var song;
song.volume = 1;

//playlist object
var playlist = {
  derMond: {
    title: "der Mond (ii)",
    tracks: {

    }
  },
  popMusic: {
    title: "popular music, vols. 1 & 2",
    tracks: {

    }
  },
  fsu: {
    title: "florida state universiry 2011-2013",
    tracks: {

    }
  }
};
