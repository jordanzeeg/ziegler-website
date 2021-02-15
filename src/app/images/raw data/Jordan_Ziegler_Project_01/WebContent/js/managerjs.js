window.onload = function() {
	
	  var parameters = location.search.substring(1).split("%");

  var temp = parameters[0].split("=");
   reimb_id = unescape(temp[1]);//was originally reimb_id = unescape(temp[1]);
   getReimbursement(reimb_id);
 // here for testing and verification that id gets passed

document.getElementById("reimbtest").innerHTML = reimb_id;

}





function getReimbursement(rid){

	var data_file = "reimbursement" + rid + ".json";
	
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET",data_file,true);
	xhttp.onreadystatechange = function(){
		
		
		if (xhttp.readyState == 4 && xhttp.status == 200){
			let reimbursement = JSON.parse(xhttp.responseText);
			setValues(reimbursement);
		}
	}
	
	xhttp.send(null);
	
}
function setValues(reimbursement){
	
	
	document.getElementById("placeForId").value = reimbursement.id;
	
	document.getElementById("thisonetoo").value = reimbursement.id;
	document.getElementById("placeForAmount").value = reimbursement.amount;
	document.getElementById("placeForDescription").value = reimbursement.description;
	document.getElementById("placeForAuthor").value = reimbursement.author;
	
	if (reimbursement.status_id == 0){
	document.getElementById("placeForStatus").innerHTML = "<select name='Status'>" +
															"<option value='0'>Pending</option>" +
															"<option value='1'>Approved</option>" +
															"<option value='2'>Denied</option>" +
															"</select>";
	}
	if (reimbursement.status_id == 1){
		document.getElementById("placeForStatus").innerHTML = "<select name='Status'>" +
																"<option value='0'>Pending</option>" +
																"<option value='1' selected>Approved</option>" +
																"<option value='2'>Denied</option>" +
																"</select>";
		}
	if (reimbursement.status_id == 2){
		document.getElementById("placeForStatus").innerHTML = "<select name='Status'>" +
																"<option value='0'>Pending</option>" +
																"<option value='1'>Approved</option>" +
																"<option value='2' selected>Denied</option>" +
																"</select>";
		}
	document.getElementById("thisonetoo").value = reimbursement.id;
}

