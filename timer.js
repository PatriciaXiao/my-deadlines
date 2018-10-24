function countdown_timer(date_string, container_id) {
	var countDownDate = new Date(date_string).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get todays date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // If the count down is finished, write some text 
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById(container_id).innerHTML = "EXPIRED";
	  } else {
  	  	// Time calculations for days, hours, minutes and seconds
  	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  	  // Display the result in the element with id="demo"
  	  document.getElementById(container_id).innerHTML = days + "d " + hours + "h "
  	  + minutes + "m " + seconds + "s ";
	  }

	}, 1000);
}