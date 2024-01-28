
$(".n").on('click' , function(e){
    let myH = e.target.getAttribute('href')
    let mySection = $(myH).offset().top;
    
    $('html').animate({ scrollTop : mySection } , 3000)
    })



// $(document).ready(function() {
  
//     $(".n").on("click", function(e) {
//       if (this.hash !== "") {
//         e.preventDefault();
  
//         var hash = this.hash;
//         $("html, body").animate({
//           scrollTop: $(hash).offset().top
//         },2000, function() {
//           window.location.hash = hash;
//         });
//       }
//     })

// })




$(".openNav").click(function(){
    $(".sidenav").css("left" , "0")
})
$(".closebtn").click(function(){
    $(".sidenav").css("left" , "-270px")
})


$("#sliderDown h3").click(function(){
    $(this).next().slideToggle();
    $("#sliderDown div").not($(this).next()).slideUp();
})


let countDownDate = new Date("Jan 5, 2026 00:00:00").getTime();
let x = setInterval(function() {// Get today's date and time
    let now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    $(".days").html(days + "D");
    $(".hours").html(hours + "H");
    $(".minutes").html(minutes + "M");
    $(".seconds").html(seconds + "S");


    })


  $("textarea").keyup(function () { 
let myT=$(this).val().length;
 $("#chars").text(100 - myT);
if(100-myT <=0){
    $("#chars").text("your available character finished")

}
});




$(window).on('scroll' , function(){
    let ws = $(window).scrollTop();

    if(ws>312){
        $(".openNav").css('display' , 'none')
    }
    else{
        $(".openNav").css('display' , 'block')
    }
})





