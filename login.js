document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    let valid = true;

    if (username.trim() === '') {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});