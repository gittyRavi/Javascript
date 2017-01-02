function myfunction (){
	var x=prompt("Enter no. of people :\n");
	var y=new Array(x);
	var z=new Array(x);
	var i=0;
	var n=0;
	var s;
	for(i=0;i<x;i++)
	{
		if(i==0){s="st";}
		else if(i==1){s="nd";}
		else if(i==2){s="rd";}
		else s="th";
	
	
		y[i]=prompt("Enter name of "+(i+1)+s+" person :");
		z[i]="<z style='color:blue;'>"+(i+1)+". Hello <i><u>"+y[i]+"</u></i> </z><br/>";
	}
	for(i=1;i<x;i++)
	{
		z[i]=z[i-1]+z[i];
	}
	document.getElementById("h").innerHTML="<center>"+z[x-1]+"</center>";
	document.getElementById("g").style.display="none";
	document.getElementById("j").style.display="block";
	document.getElementById("g2").style.display="none";
	document.getElementById("j2").style.display="block";
}
