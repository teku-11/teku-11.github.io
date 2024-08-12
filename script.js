// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function validate(){
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var  message = document.getElementById('message').value;
    
   
    if(name==''){
        alert('Name is required');
        return false;
    }
    if(!validateName(name)){
        alert('Please enter correct name');
        return false;
    }
    if(email==''){
        alert('Email is required');
        return false;
    }
    if(!validateEmail(email)){
        alert('Please enter correct email');
        return false;
    }
    if(message==''){
        alert('Message is required');
        return false;
    }

    alert('Form submitted successfully.');
    
    return true;
}
function validateName(text){
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(text);
}
function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}