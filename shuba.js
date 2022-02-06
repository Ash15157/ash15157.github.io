var audio;
$(document).ready(function() {
                audio = document.querySelector("#song");
               // audio.volume = 0.5;
                const noise = document.querySelector("#noise");
                // noise.volume = 0.5;
  
  $( "#volume" ).on( "click", function() {
   if(audio.paused) {
     audio.play();
     audio.volume = 0.50;
     $("#volumeSlider").val(50);
   } else {
     audio.pause();
     audio.volume = 0.0;
     $("#volumeSlider").val(0.0);
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

  $("#petDuckButton").on("click",function(){
      if(noise.paused) {
          noise.play();
      } else {
          noise.pause();
      }
  })


});

function volumeChange(val){
    let audioVolume = val/100;
    audio.volume = audioVolume;
    if(audioVolume === 0.0){
        audio.pause();
        $("#icon").removeClass("bi-volume-up");
        $("#icon").addClass("bi-volume-mute");
    } else {
        audio.play();
        $("#icon").removeClass("bi-volume-mute");
        $("#icon").addClass("bi-volume-up");
      //yes.
    }
}
