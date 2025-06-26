function nameset(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    const address = document.getElementById('address').value
    const contact = document.getElementById('contact').value
    const selectedGenderElement = document.querySelector('input[name="gen"]:checked')
    const gender = selectedGenderElement ? selectedGenderElement.value : ''
    const DOB = document.getElementById('DOB').value

    document.getElementById('nameError').textContent = ''
    document.getElementById('emailError').textContent = ''
    document.getElementById('passwordError').textContent = ''
    document.getElementById('addressError').textContent = ''
    document.getElementById('contactError').textContent = ''
    document.getElementById('genderError').textContent = ''
    document.getElementById('dobError').textContent = ''

    let isValid = true

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Full Name is required.'
        isValid = false
    }

    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.'
        isValid = false
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.'
        isValid = false
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.'
        isValid = false
    }

    if (address.trim() === '') {
        document.getElementById('addressError').textContent = 'Address is required.'
        isValid = false
    }

    if (contact.trim() === '' || isNaN(contact) || contact.length !== 10) {
        document.getElementById('contactError').textContent = 'Contact must be a 10-digit number.'
        isValid = false
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = 'Gender is required.'
        isValid = false
    }

    if (DOB.trim() === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required.'
        isValid = false
    }

    if (isValid) {
        alert(`Please check console for the data.`)
        console.log("Form submitted successfully!")
        console.log(`User's name is ${name}`)
        console.log(`User's email is ${email}`)
        console.log(`User's password is ${password}`)
        console.log(`User lives in ${address}`)
        console.log(`User's contact is ${contact}`)
        console.log(`User is a ${gender}`)
        console.log(`User's Date of Birth is ${DOB}`)
    } else {
        console.log("Form validation failed. Please check the errors.")
    }
}


function SHpass() {
    let a = document.getElementById('pass')
    if (a.type == 'password') {
        a.type = 'text'
    }
    else {
        a.type = 'password'
    }
}

let input = document.getElementById('pass')

input.addEventListener('blur', function () {
    console.log('input focused')
const password = document.getElementById('pass').value

    if (password.length < 8) {
        // document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.'
        input.style.border = '2px solid red'
        console.log(password.length)
    }else{
        input.style.border = '2px solid black'
        console.log("one")
    }
})