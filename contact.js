document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (message.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}