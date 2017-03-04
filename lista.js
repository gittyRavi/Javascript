/*<!DOCTYPE html>
<html>
<body>
<p id="lista"></p>
*/
<script>
var person = new Object();  //object
person.Name = prompt("Enter your name");
person.age = prompt("Enter your age");
var y=[]; //list
var x=parseInt(prompt("Enter your no. of siblings"),10)-1;
var child=Array(x);
for(i=0;i<=x;i++)
{
	child[i]=Object.create(person);   //object
    child[i].Name=prompt("Name of sibling no"+(i+1)+" is ");
    child[i].age=prompt("Age of sibling no"+(i+1)+" is ");
    child[i].sum=child[i].Name+"-"+"<span style='color:red;'>"+child[i].age+"yr(s)</span><br/>";
    y.push((i+1)+"."+child[i].sum);
}
document.getElementById("lista").innerHTML ="You are "+"<span style='color:red;'>"+
person.Name+"</span>"+" and your age is "+"<span style='color:red;'>"+person.age+"</span>" +" year(s) old.<br/>The list of your siblings is :<br/>"+"<span style='color:blue;'>"+y+"</span><br/>";
</script>
/*
</body>
</html>
*/
