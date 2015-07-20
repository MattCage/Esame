// JS che gestisce il menu

// Se la finestra è < di 992px, nascondi il menu
if( $( window ).width() < 992 ) $( '#menu-container' ).hide();

// Al click su #bottoneLogo
$( '#bottoneLogo' ).click( function() {
	
	// Se la finestra è < di 992px toggla il menu, altrimenti non intervenire
	if( $( window ).width() < 992 ) $( '#menu-container' ).slideToggle();
		
});