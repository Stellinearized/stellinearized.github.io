$(function () {
    var curAudio;
    $(".audio-button").click(function (e) {
        e.preventDefault();
        var song = $(this).next('audio')[0];

          $('audio').on('ended', function() {
       if (song.paused) {
            song.play();
            curAudio = song;
          //  $(this).find('.btn-text').text('Stop');
            $(this).find('.btn-icon').html('');
        } 
    });  
  
      
        if (song.paused) {
            song.play();
            curAudio = song;
          //  $(this).find('.btn-text').text('Stop');
            $(this).find('.btn-icon').html('');
        } else {
            song.pause();
            curAudio = undefined;
          //  $(this).find('.btn-text').text('Listen');
            $(this).find('.btn-icon').html('');
        }
        curPlaying = $(this).parent()[0].id;
    });


});
