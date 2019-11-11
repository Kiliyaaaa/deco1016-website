//the alert for from
function ssd(){
var sub = document.getElementById("sub");
	var user = document.getElementById("user");
	var last = document.getElementById("last");
	var add = document.getElementById("add");
	var pass = document.getElementById("pass");
	var con = document.getElementById("con");
	var phone = document.getElementById("phone");
	var check = document.getElementById("check");

		if(user.value=="" || last.value=="" || add.value=="" || con.value=="" || phone.value=="" || check.checked==false){
			alert("Please fill in this filed?")
			return false;
		}
	}