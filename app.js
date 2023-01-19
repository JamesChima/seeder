const error = document.querySelector('#error-message');

function validatePhoneNumber() {
    const phone = document.querySelector('#phone').value;
    if (isNaN(phone)) {  
        error.innerHTML = "Enter a valid phone number!";
        return false;
    }
    
    if (!phone.length) {
        error.innerHTML = "Enter a phone number!";
        return false;
    } 
    
    if (phone.length != 11) {
        error.innerHTML = "Phone number should be 11 digits!";
        return false;
    }

    if (!phone.match(/^0[0-9]{9,10}$/) ) {  
        error.innerHTML = "Enter a valid phone number!";
        return false;
    }

    error.innerHTML = ' ';
    return true;
} 

function goToRegisterPageWithPhoneNumber() {
    const phone = document.querySelector('#phone').value;
    if (!validatePhoneNumber()) {
        error.style.display = 'block';
        error.innerHTML = 'Check your entry';
        setTimeout(function() {error.style.display = 'none';}, 3000);
        return false;
    }
    const encodedNum = btoa(phone);
    window.open('https://my.blinkcash.ng/#/auth/register/'+encodedNum, '_blank');
    return true;   
}

function stopAlphabets(e) {
	let ASCIICode = (e.which) ? e.which : e.keyCode
	    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
            return false;
         }	
	return true;
}