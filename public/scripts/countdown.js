$( document ).ready(function() {

  $.ajax({
    type : 'GET',
    url: '/public/countdown-endtime.txt',
    success : function(data) {
      console.log('anything');
        console.log(data);
        countdownView(data);
    },
    error: function(err) {
      console.log('anythingerr');
      console.log(err);
    }
  });


});


function countdownView(datetime){

  console.log('now');
  console.log(datetime);

  $('#countdown').countdown(datetime, function(event) {
    console.log("ACK");
    //$(this).find('.main').html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).find('td.days').html(event.strftime('%D'));
    $(this).find('td.hours').html(event.strftime('%H'));
    $(this).find('td.minutes').html(event.strftime('%M'));
    $(this).find('td.seconds').html(event.strftime('%S'));
  });
  // $('#countdown').on('finish.countdown', function() {
  //   $('#countdown').hide();
  //   $('#remote-video').show();
  // });

}
