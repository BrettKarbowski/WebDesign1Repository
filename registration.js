document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    let valid = true;

    if (username.trim() === '') {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
})