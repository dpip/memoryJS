//TIME>>>>>>>>>>>>>>>>>>
// SOURCE http://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer
// Comment #6
function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

var start = new Date;

setInterval(function() {
  var total_seconds = (new Date - start) / 1000;

  var hours = Math.floor(total_seconds / 3600);
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  var currentTimeString = hours + ":" + minutes + ":" + seconds;

  $('.time').text(currentTimeString);
}, 1000);


//TIME>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CARD FLIP>>>>>>>>>>>>>>>>>>>>>>

$(".Card").on("click", function() {

  if($(".flipped").length < 2) {
    $(this).addClass("flipped");
    }
  if($(".flipped").length === 1) {
    storage=$(this).children().children().attr("class");
    }
  if($(".flipped").length === 2) {
    if($(this).children().children().attr("class") == storage) {
      $(".flipped").addClass("bingo").removeClass("flipped");
        storage = null;
    }
  else {
  storage = null;
  $(".gone:last").remove();
  console.log("blah")
  for(var i = 0; i < $(".flipped").length; i++) {
    setTimeout(function() {
    $(".flipped").removeClass("flipped");
    }, 1000);
    }
  }
}
});

//Card FLIP>>>>>>>>>>>>>>>>>>>>>>>
