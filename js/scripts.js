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

//playlist object
var playlist = {
  derMond: {
    title: "der Mond (ii)",
    tracks: [
      {
        name: 'der Mond',
        el: $('#mond-01'),
        url: 'audio/der-mond/01.ogg'
      },
      {
        name: 'die Sonne',
        el: $('#mond-02'),
        url: 'audio/der-mond/02.ogg'
      },
      {
        name: 'der Himmel',
        el: $('#mond-03'),
        url: 'audio/der-mond/03.ogg'
      },
      {
        name: 'die Sternen',
        el: $('#mond-04'),
        url: 'audio/der-mond/04.ogg'
      },
      {
        name: 'for Cardboard and Digital Oceans',
        el: $('#mond-05'),
        url: 'audio/der-mond/05.ogg'
      },
      {
        name: 'for Piano and Locomotive',
        el: $('#mond-06'),
        url: 'audio/der-mond/06.ogg'
      },
      {
        name: "'I don't wanna die'",
        el: $('#mond-07'),
        url: 'audio/der-mond/07.ogg'
      },
      {
        name: 'for Bell Tower and Reverb Pedal',
        el: $('#mond-08'),
        url: 'audio/der-mond/08.ogg'
      },
      {
        name: "'The Air After the Flood'",
        el: $('#mond-09'),
        url: 'audio/der-mond/09.ogg'
      },
      {
        name: 'for Clarinet and Night Sky',
        el: $('#mond-10'),
        url: 'audio/der-mond/10.ogg'
      },
      {
        name: 'for Organs and Drainpipe',
        el: $('#mond-11'),
        url: 'audio/der-mond/11.ogg'
      },
      {
        name: 'Ghost',
        el: $('#mond-12'),
        url: 'audio/der-mond/12.ogg'
      },
      {
        name: 'der Mond',
        el: $('#mond-13'),
        url: 'audio/der-mond/13.ogg'
      },
      {
        name: 'Thaw',
        el: $('#mond-14'),
        url: 'audio/der-mond/14.ogg'
      },
      {
        name: 'the Road to Tallahassee, pt. II',
        el: $('#mond-15'),
        url: 'audio/der-mond/15.ogg'
      },
      {
        name: 'Crocodile/the Moon',
        el: $('#mond-16'),
        url: 'audio/der-mond/16.ogg'
      }
    ]
  },
  popMusic: {
    title: "popular music, vols. 1 & 2",
    tracks: [
      {
        name: 'vol. 1',
        el: $('#pop-01'),
        url: 'audio/popular-music/01.ogg'
      },
      {
        name: 'vol. 2',
        el: $('#pop-02'),
        url: 'audio/popular-music/02.ogg'
      }
    ]
  },
  fsu: {
    title: "florida state universiry 2011-2013",
    tracks: [
      {
        name: 'side A',
        el: $('#fsu-01'),
        url: '...'
      },
      {
        name: 'side B',
        el: $('#fsu-02'),
        url: '...'
      },
      {
        name: 'side C',
        el: $('#fsu-03'),
        url: '...'
      },
    ]
  }
};

//methods object
var methods = {
  initAudio: function(album, index) {
    var track = album.tracks[index];

    var url = track.url;
    var albumTitle = album.title;
    var trackTitle = track.name;

    //Changes the info in the player bar
    $('.title').text(trackTitle);
    $('.album').text(albumTitle);

    //Inits song, plays
    song = new Audio(url);
    song.play();
  }
};
