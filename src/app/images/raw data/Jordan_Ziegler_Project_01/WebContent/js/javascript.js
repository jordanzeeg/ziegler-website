
var password1 = document.querySelector("#password1");




function validate() {
	if(password1.value.length < 6)
		errorline = document.createElement(p);
	errorline.innerHTML = "Invalid Password.";
		document.form.appendChild(errorline);
		
	
}

