function init(){

  document.getElementById("submit").addEventListener("click", function()
  {
    var output = "Thank You for signing up to the Speedwagon Foundation Newsletter. Be sure to check your email for an exclusive discount.";
	alert(output);
  });
}

window.addEventListener('load', init);

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
