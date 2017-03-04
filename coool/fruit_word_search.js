/*
<!DOCTYPE html>
<html>
<body>
<div id="g">
</div>
*/
<script>
var h,fruit = {
    apple: 2,
    orange:5,
    pear:1
},
sentence = 'I have ',
quantity;
for (i in fruit){
    quantity = fruit[i];
    sentence += quantity+' '+i+
                (quantity===1?'':'s')+
                ', ';
}
 // The following line removes the trailing coma.
sentence = sentence.substr(0,sentence.length-2)+'.';
 // I have 2 apples, 5 oranges, 1 pear.
var x=prompt("search fruit name");
var x1=x+'s';
var x2=x.substr(0,x.length-1);
var z=false;
for(i=0;i<sentence.length;i++)
{
	if(sentence.substr(i,x.length)===x||sentence.substr(i,x.length+1)===x1||sentence.substr(i,x.length-1)===x2)
    {z=true;
    break;}
 	else {z=false;}
}
if(z===true)
{h="fruit "+x+" is present";}
else {h="fruit "+x+" is not present";}
document.getElementById('g').innerHTML=sentence+"<br/>"+h;
</script>
/*
</body>
</html> 
*/
