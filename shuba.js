$(document).ready(function() {
                const audio = document.querySelector("#song");
                audio.volume = 0.8;
                const noise = document.querySelector("#noise");
                noise.volume = 0.5;
  
  $( "#volume" ).on( "click", function() {
   if(audio.paused) {
     audio.play();
   } else {
     audio.pause();
   }
    $("#icon").toggleClass("bi-volume-mute").toggleClass("bi-volume-up");
});
  
  $("#shubaNoise").on("click",function(){
    if(noise.paused) {
     noise.play();
   } else {
     noise.pause();
   }
  });
});
