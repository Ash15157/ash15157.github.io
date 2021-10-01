$(document).ready(function() {
                const audio = document.querySelector("audio");
                audio.volume = 0.8;
                audio.play();
  
  $( "#volume" ).on( "click", function() {
   if(audio.paused) {
     audio.play();
   } else {
     audio.pause();
   }
    $(this).toggleClass("btn-secondary");
});
});
