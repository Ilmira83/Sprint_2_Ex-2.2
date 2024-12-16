
// Exercise 6
function validate() {

	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPhone = document.getElementById("fPhone");
	
	let forms = document.querySelectorAll('.needs-validation');
		forms.forEach(function (form) {
  		form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			}
    form.classList.add('was-validated');

		if (/\d/.test(fName.value)) {
			fName.setCustomValidity('This field is required and must contain only letters, at least, 3 characters.')
		} else {
			fName.setCustomValidity('');
		}
		if (!fName.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (/\d/.test(fLastN.value)) {
			fLastN.setCustomValidity('This field is required and must contain only letters, at least, 3 characters.');
		} else {
			fLastN.setCustomValidity('');
		}
		if (!fLastN.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (/[a-zA-Z]/.test(fPhone.value)) {
			fPhone.setCustomValidity();
		} else {
			fPhone.setCustomValidity('');
		}
		if (!fPhone.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (/(?=.*[a-zA-Z])(?=.*\d)/.test(fPassword.value)) {
			fPassword.setCustomValidity();
		} else {
			fPassword.setCustomValidity('');
		}
		if (!fPassword.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}

  }, false); 
	
});
    
}
