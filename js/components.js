// Enable full responsiveness

// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

// Toggle Menu
$(document).ready(function() {
	var menuLeft = document.getElementById( 'side-menu' ),
		showLeft = document.getElementById( 'menu-button' ),
		body = document.body;
	showLeft.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( this, 'fa-bars');
		classie.toggle( this, 'fa-close');
		classie.toggle( body, 'push' );
		classie.toggle( menuLeft, 'open' );
		disableOther( 'showLeft' );
	};
	function disableOther( button ) {
		if( button !== 'showLeft' ) {
			classie.toggle( showLeft, 'disabled' );
		}
	}
	// Add/Remove classes if click outside of menu
	$("#page").click(function(){
		  $(showLeft).removeClass("active");
		  $(showLeft).removeClass("fa-close");
		  $(showLeft).addClass("fa-bars");
	      $(menuLeft).removeClass("open");
	      $(body).removeClass("push");
	});
});