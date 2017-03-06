/*
<html>
    <head>
    	<title>Add or remove the &lt;div&gt; on click</title>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript">
*/		
			$(document).ready(function(){  // adding input to the div.msg
				$('button').click(function(){     
					var toAdd = $("input[name=message]").val();
					$('#messages').append('<div class="msg">'+toAdd+' <i style="opacity:0.5;"class="fa fa-window-close" aria-hidden="false"></i></div>');
					$("input[name=message]").focus(function() {
						this.value = null;
					});
				});
			});
			$(document).on('mouseenter','.msg',function(){  // deleting the div.msg
				var th=$(this);
				$('div.msg i').click(function(){th.remove();});
			});
			$(document).on('click','#2',function(){
				$('div.msg').remove();
			});
 /*
    </script>
    <style type="text/css">
			form{
				font-size: 12px;
				font-family: Verdana, Arial, Sans-Serif;
				display: inline-block;
				}
			#messages{
				font-size: 14px;
				font-family: Garamond, Times, Serif;
				}
			label{
				border-style:solid;
				border-width:5px;
				border-color:rgba(0,0,0,0.4);
				background-color:rgba(255,0,255,0.4);
				display: inline-block;
				border-radius:15px;
				margin:0;
				padding-left:2px;
				padding-right:2px;
				font-size:20px;
				}
			input{
				position:center;
				margin:0;
				border-width:4px;
				border-color:rgba(0,0,0,0.4);
				background-color:rgba(255,155,155,0.2);
				display: inline-block;
				border-radius:15px;
				margin:0;
				padding-left:2px;
				padding-right:2px;
				font-size:20px;
				}
			button{
				border-width:3px;
				border-color:rgba(0,0,0,0.4);
				background-color:rgba(0,255,255,0.4);
				display: inline-block;
				border-radius:15px;
				margin:0;
				padding-left:2px;
				padding-right:2px;
				font-size:20px;
				}
			div.msg{
				border-style:dotted;
				border-width:5px;
				border-color:rgba(0,0,0,0.4);
				background-color:rgba(255,0,0,0.4);
				display: inline-block;
				border-radius:15px;
				padding-left:2px;
				padding-right:2px;
				font-size:30px;
				}
			hr{
				border-style:dotted;
				border-width:5px;
				border-color:rgba(0,0,0,0.4);
				}
		</style>
		<link rel="stylesheet" href="http://fontawesome.io/assets/font-awesome/css/font-awesome.css">
	</head>
	<body>
        <center><hr  style="width:100%;"/>
		<form>
        <label>MESSAGE: </label> <input type="text" name="message" placeholder="Type your text here!">
        </form>
        <button>Add!</button> <button id="2" style="color:blue;padding-left:5px;padding-right:5px;">To Remove Click On The Word!</button>
        <hr style="width:100%;"/></center><br/><br/>
		<div id="messages"></div>
	</body>
</html>
*/
