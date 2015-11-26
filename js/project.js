
// Email Validation
$(document).ready(function() {

  $('#btn-submit').click(function() {

    $(".error").hide();
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


    var emailaddressVal = $("#contact-email").val();
    if(emailaddressVal == '') {
      $("#contact-email").after('Please enter your email');
      $("#contact-email").css('border-color', 'red');
      hasError = true;
    }

var messageVal = $("#message").val();
if (messageVal == '') {
  $("#message").after('Send us a message');
  $("#message").css('border-color', 'red');
  hasError = true;
}

    if(hasError == true) { return false; }

    });
});

$(".trigger").on("click", function (){
  // use the jquery slide toggle function to animate in and out our navigation links
  $("nav").slideToggle("slow");
});


$(".scroll-to").on("click", function(){

var sectionName = $(this).attr("href");


  var sectionPlacement = $(sectionName).offset().top;

$("html, body").animate({scrollTop: sectionPlacement}, 1000);

return false;

});

$('.quote').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
