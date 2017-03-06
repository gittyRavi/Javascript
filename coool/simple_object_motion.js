/*
<!DOCTYPE html>
<html>
    <head>
    	<title>Super Mario!</title>
        <style type="text/css">
          img {
          position: relative;
          left: 0;
          top: 0;
          }
        </style>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script type='text/javascript'>
*/
      $(document).ready(function() {
       $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			  // Left arrow key pressed
			  case 37:
			  	$('img').animate({left: "-=10px"}, 'fast');
				  break;
			  // Up Arrow Pressed
			  case 38:
			  	$('img').animate({top: "-=10px"}, 'fast');// Put our code here
				  break;
			  // Right Arrow Pressed
			  case 39:
				$('img').animate({left: "+=10px"}, 'fast');// Put our code here
				  break;
			  // Down Arrow Pressed
			  case 40:
				$('img').animate({top: "+=10px"}, 'fast');// Put our code here
				  break;
		  }
	  });
});
/*
     </script>
	</head>
	<body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
	</body>
</html>
*/
