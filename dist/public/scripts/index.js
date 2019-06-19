'use strict';

window.onload = function () {
  var bt = document.getElementsByTagName('<button></button>')[0];

  bt.addEventListener('click', function () {
    window.location.href = '/auth/google';
  });
};

$(document).ready(function () {
  var video = document.getElementsByTagName('video')[0];
  video.currentTime = 10;

  console.log(video.currentTime);
  // loop video
  setTimeout(function () {
    video.currentTime = 10;
    video.play();
  }, 104000);
  $('.overlay').delay(2000).animate({
    'opacity': 1
  }, 700, function () {
    $(".text").animate({
      'top': '38%',
      'opacity': 1
    });
    $(".textbox").animate({
      'top': '52%',
      'opacity': 1
    });
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 13) {
      var query = $('.textbox').val();

      if (query.length) {
        swal({
          title: 'Fetching Tweets!',
          timer: 4000,
          onOpen: function onOpen() {
            swal.showLoading();
          }
        }).then(function (result) {
          swal({
            title: 'Generating Map!',
            timer: 3000,
            onOpen: function onOpen() {
              swal.showLoading();
            }
          }).then(function (result) {
            swal({
              title: 'Success...',
              text: 'Sentiment Map Generated!',
              type: 'success'

            });
            $('.swal2-confirm').click(function () {
              var data = 'q=' + query;
              $.post('/map', data, function (e) {
                if (e == 'success') {
                  window.location.href = '/map?view=local';
                }
              });
            });
          });
        });
      }
    }
  });
});
//# sourceMappingURL=index.js.map