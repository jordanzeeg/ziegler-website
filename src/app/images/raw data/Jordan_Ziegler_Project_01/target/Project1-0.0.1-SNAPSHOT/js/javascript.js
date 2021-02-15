
var password1 = document.querySelector("#password1");




function validate() {
	if(password1.value.length < 6)
		errorline = document.createElement(p);
	errorline.innerHTML = "Invalid Password.";
		document.form.appendChild(errorline);
		
	
}

var modal = document.getElementById('id01');

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}