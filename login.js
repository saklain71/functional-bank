document.getElementById('login-submit').addEventListener('click',function(){
    const userEmailField = document.getElementById('user-email');
    userEmail = userEmailField.value;
    const passwordField = document.getElementById('user-password');
    userPassword = passwordField.value;
    if( userEmail == 's@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Hello , Give the right email and password')
    }
})