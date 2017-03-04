/*<!DOCTYPE html>
<html>
<body onmouseover="myFunction()">

<p>Compute : <label style="color:red;"><b>x+y=z</b></label></p>
<form>
x:<input type="text" id="x" value="0"onmouseout="myFunction()">
y:<input type="text" id="y" value="0"onmouseout="myFunction()">
</form>
<p id="demo"style="color:red;"></p>
<p>Sum=z, z=<span id="z">0</span></p>
*/
<script>
function myFunction() {
	var x,y;
    var add=function(x,y){return x+y;}
    x=parseFloat(document.getElementById("x").value,0);
    y=parseFloat(document.getElementById("y").value,0);
	var z=add(x,y);
    var s=[x," "+y," "+z];
    document.getElementById("demo").innerHTML ="(x, y, z) : "+"("+s+")";
    document.getElementById("z").innerHTML =z;
}
</script>
/*
</body>
</html>
*/
