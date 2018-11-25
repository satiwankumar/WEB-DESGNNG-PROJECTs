


window.onload = function(){
document.getElementById('Button').onclick=function(){display();}

}
function display(){
	var date = new Date();
	var day = date.getDay();
	var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById('paragraph').innerHTML = "Today is  " + daylist[day] + ".";



var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();
minute = checktime(minute);
seconds = checktime(seconds);


var prepand = hour >=12 ? "PM" : "AM";
if (hour > 12 ) {
var prepand = (hour -12)  + " PM";
} else {
var prepand = hour + " AM"; 
}


document.getElementById('paragraph1').innerHTML = prepand +" :"  + minute +" : "+ seconds ;
  var t = setTimeout('display()', 500);

    


}

function checktime(i){
	if (i<10) {
		 i = "0"+i
		 return i;

	}
else {
	return i;
}
}