$(window).load(function () {
	$('body').sakura({
		blowAnimations: ['blow-medium-right', 'blow-hard-right'], // Horizontal movement animation names
		className: 'sakura', // Class name to use
		fallSpeed: 2, // Factor for petal fall speed
		maxSize: 60, // Maximum petal size
		minSize: 50, // Minimum petal size
		newOn: 600, // Interval after which a new petal is added
		swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
	});
});

/*$(document).ready(function(){	//executed after the page has loaded

    checkURL();	//check if the URL has a reference to a page and load it

    $('ul li a').click(function (e){	//traverse through all our navigation links..

            checkURL(this.hash);	//.. and assign them a new onclick event, using their own hash as a parameter (#page1 for example)

    });

    setInterval("checkURL()",250);	//check for a change in the URL every 250 ms to detect if the history buttons have been used
	
	var width = $(window).width() - 40;
	var starttime = new Date().getTime();
	// var letters = document.location.hash ? document.location.hash.substr(1) : 'SINUSWAVE';
	// var elements = $('#elements');
		
	setInterval(run, 30);
	
	// $( 'img.fiore' ).fadeIn( "slow" );
		
	function run() {
		var elapsed = new Date().getTime() - starttime;
		var pos = elapsed * 0.1;
		
		$( 'img.fiore' ).each( function( index, letter ) {
			
			var posx = ( pos + 50 * index ) % width;
			var posy = 200 + Math.sin( posx / 50 ) * 50;
			$( letter ).css( 'left', posx + 'px' );
			$( letter ).css( 'top', posy + 'px' );
			$( this ).fadeIn( 3000 );
		});
	}

});


var lasturl="";	//here we store the current URL hash

function checkURL(hash)
{
    if(!hash) hash=window.location.hash;	//if no parameter is provided, use the hash value from the current address

    if(hash != lasturl)	// if the hash value has changed
    {
        lasturl=hash;	//update the current hash
        loadPage(hash);	// and load the new page
    }
}

function loadPage(url)	//the function that loads pages via AJAX
{
    url=url.replace('#page_','');	//strip the #page part of the hash and leave only the page number

    $('#loading').css('visibility','visible');	//show the rotating gif animation

    $.ajax({	//create an ajax request to load_page.php
        type: "POST",
        url: "load_page.php",
        data: 'page='+name,	//with the page number as a parameter
        dataType: "html",	//expect html to be returned
        success: function(msg){

            if(parseInt(msg)!=0)	//if no errors
            {
                $('#main-body').html(msg);	//load the returned html into pageContet
                $('#loading').css('visibility','hidden');	//and hide the rotating gif
            }
        }

    });

}*/