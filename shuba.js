var audio;
$(document).ready(function() {
                audio = document.querySelector("#song");
               // audio.volume = 0.5;
                const noise = document.querySelector("#noise");
                // noise.volume = 0.5;

    /*controls the volume button*/
  $( "#volume" ).on( "click", function() {
      //"mutes" (Actually pauses) or "unmutes" (Actually plays) the audio
   if(audio.paused) {
     audio.play();
     audio.volume = 0.50;
       //updates the value on the volume slider
     $("#volumeSlider").val(50);
   } else {
     audio.pause();
     audio.volume = 0.0;
       //updates the value on the volume slider
     $("#volumeSlider").val(0.0);
   }
   //logic to control the volume button icon
    $("#icon").toggleClass("bi-volume-mute").toggleClass("bi-volume-up");
});

  //plays the duck noise whenever you click on the gif or pet duck button.
  $(".duckNoise").on("click",function(){
    if(noise.paused) {
     noise.play();

     //adds the hand patting DOM element for 2500 milliseconds or 2.5 seconds.
     $("#shubaNoise").prepend(" <img class=\"img-fluid handPattingCSS smallHand\" src=\"petpet.gif\" id=\"pattingHand\" alt=\"patting hand\">");
     setTimeout(function(){
         $("#pattingHand").remove();
        },2500)
   } else {
     noise.pause();
   }
  });

  //Changes the song to Hey Ya!
  $("#heyYa").on("click",function(){
      muteSong();
      $("#volumeSlider").val(0.0);
      $("#song").attr("src","HeyYa.mp3");

  })

    //Changes song to Oozora Subaru's BGM https://www.youtube.com/watch?v=IFVbkGqgqFs
    $("#BGM").on("click",function(){
        muteSong();
        $("#volumeSlider").val(0.0);
        $("#song").attr("src","ShubaBGM.mp3");

    })



});

/* Changes the volume of the song*/
function volumeChange(val){
    //volume is from a range of 0.0 to 1.0, so we need to convert the value obtained from the range.
    let audioVolume = val/100;
    audio.volume = audioVolume;
    if(audioVolume === 0.0){
        muteSong();
    } else {
        audio.play();
        //controls the look of the volume button
        $("#icon").removeClass("bi-volume-mute");
        $("#icon").addClass("bi-volume-up");
      //yes.
    }
}

/*General function to pause the song and change the volume button icon*/
function muteSong(){
    //pauses song
    audio.pause();
    //controls the look of the volume button
    $("#icon").removeClass("bi-volume-up");
    $("#icon").addClass("bi-volume-mute");
}
