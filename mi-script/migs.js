/*
* MI Grid Version 1.0
* Copyright 2014, Muhammad Idrees
* www.midexigner.com
* 28/November/2014
*  License: none (public domain)
*/

/* Toggle Navbar
========================================================*/

$(document).ready(function() {
    
	// After .navclosed is clicked, change .navclosed to navclicked + change .wrapper to wrapper-push
	$(".navclosed").click(function () {
		$(this).toggleClass("navclicked");
		$(".wrapper").toggleClass("wrapper-push");
		return false;
	});

	// Sticky Header, makes header stick to top when page reaches top
	var fixedHeader = $(".sticky"),
		fixedHeaderTop = fixedHeader.removeClass('stuck').offset(),
		fixedH = (function stickit(){
			if( $(window).scrollTop() > fixedHeaderTop )
				fixedHeader.addClass('stuck');
			else
				fixedHeader.removeClass('stuck');
			return stickit;
		})();
	$(window).scroll(fixedH);

});


/* click disable
========================================================*/

function clickIE4(){
if (event.button==2){
alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("return false")


$("img").mousedown(function(){
    return false;
})

/* Copyright Year
========================================================*/

document.getElementById("footer").innerHTML =
 "<p><small>&copy;  " + new Date().getFullYear() + "</small>" + " All rights reserved.</p>";



