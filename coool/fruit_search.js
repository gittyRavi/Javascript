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
var z=false;
for (i in fruit){
    quantity = fruit[i];
    if(x===i+'s'||x===i)
      {z=true;break;}
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
