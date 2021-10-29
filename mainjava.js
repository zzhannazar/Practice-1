const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
e.preventDefault()

validate()
})

function validate() {
const emailValue = email.value.trim()
if (emailValue=''){
setErrorFor(email, 'Email cannot be empty')
}
else if(!isEmail(emailValue)) {
setErrorFor(email, 'Please provide a valid email')
}
else{
setSuccessFor(email)
}
}

function setErrorFor() {

}
function setSuccessFor() {
}

function isEmail(email){
return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)ǀ(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}ǀ[0-9]{1,3})(\]?)$/.test(email)
}
	
