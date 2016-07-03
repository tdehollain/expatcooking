$(document).ready(function() {
	
	//return;
	
	// Define the sessionBox object
	
	// sessionBox element constructor
	function session(nb, host, starter, main, dessert) {
		this.nb = nb;
		this.starter = starter;
		this.main = main;
		this.dessert = dessert;
	}
	
	// Make the Widget a Floating Box
	$('.subMenuWidget').stickyfloat({ duration: 0 } );
	
	// Define the sessions
	var allSessions = new Array;
	var session1 = new Array('1', 'Thibaut', null, 'Vegetables Lasagna', 'Banana-Chocolate');
	var session2 = new Array('2', 'Rob', null, 'Feta Cheese Pasta bla bla bla bla bla', 'Milk Rice');
	var session3 = new Array('3', 'Chad', null, 'Cornish Hens & Potato Sauté', 'Pumpkin Pie');
	
	
	allSessions.push(session1);
	allSessions.push(session2);
	allSessions.push(session3);
	
	
	var sessionWidget = $('.subMenuWidget');
	sessionWidget.find('h2').append('1');
	
	var sessionBoxes = $('.sessionBox');
	sessionBoxes.mouseenter(function() {
		var sessionNB = $(this).find('p').text().charAt(1);
		fillWidget(sessionNB);
		
	});
	
	var fillWidget = function(nb) {
	
		var currentSession = allSessions[nb-1];
		
		sessionWidget.find('h2').replaceWith('<h2 class=".subMenuWidget">Session #' + currentSession[0] + '</h2>');
		sessionWidget.find('h4').replaceWith('<h4>Host: ' + currentSession[1] + '</h4>');
		sessionWidget.find('li:first-child p').replaceWith('<p>' + currentSession[3] + '</p>');
		sessionWidget.find('li:last-child p').replaceWith('<p>' + currentSession[4] + '</p>');
	}
	
	
});