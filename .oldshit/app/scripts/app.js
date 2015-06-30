
$( document ).ready(function() {

  $.ajax({
    type : 'GET',
    url: 'http://localhost:8001/countdown-endtime.txt',
    success : function(data) {
      console.log('anything');
        console.log(data);
        countdown(data);
    },
    error: function(err) {
      console.log('anythingerr');
      console.log(err);
    }
  });


});


function countdown(datetime){

    console.log('now');
    console.log(datetime);

  $('#countdown').countdown(datetime, function(event) {
    //$(this).find('.main').html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).find('td.days').html(event.strftime('%D'));
    $(this).find('td.hours').html(event.strftime('%H'));
    $(this).find('td.minutes').html(event.strftime('%M'));
    $(this).find('td.seconds').html(event.strftime('%S'));
  });
  $('#countdown').on('finish.countdown', function() {
    $('#countdown').hide();
    $('#remote-video').show();
  });

}

/*
NATH TO DO HERE

1. cntdwn.txt
  * should be json
  * data
    * next camera
    * time-to-next (in seconds - could be a big number, k?)
    * exact-time
      * should check for time-to-next first
2. function: get time to next
  * should have default to 10 min from now
5. page: edit endtime json file
  * simple big-button form page
  * auto-filled in for +10 minutes/runnerpi1
 */
