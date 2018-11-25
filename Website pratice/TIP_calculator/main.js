

document.getElementById("total_tip").style.display = "none";

document.getElementById("button").onclick =function() { calculateTip(); }

function calculateTip(){

var billAmount=document.getElementById("bill_amount").value;

var serviceQuality  = document.getElementById("service_quality").value;
var totalPeople = document.getElementById("total_people").value;


	//quick validation0
if (billAmount === "" || serviceQuality == 0) {
	window.alert("please Enter some values to get this babay running");
	return;
}
if (totalPeople == "" || totalPeople<=1) {
	
	totalPeople=1;
document.getElementById("each").style.display = "none";
}
else{
	document.getElementById("each").style.display = "block";
}


var total = billAmount * serviceQuality / totalPeople;

total = Math.round(total *100)/100;
document.getElementById("total_tip").style.display = "block";
document.getElementById("calculate_Tip").innerHTML = total;


}