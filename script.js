document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const status = document.getElementById('status');
    const loginBtn = document.getElementById('login-btn');
    
    // Check if username and password are provided
    if (username === "" || password === "") {
        status.textContent = "Please fill in all fields.";
        status.style.color = "#e74c3c";
    } else {
        // Simulate an async login process with animation
        loginBtn.disabled = true;
        loginBtn.innerHTML = "Logging in...";

        // Change the form color and style with animation
        document.querySelector('.login-box').style.backgroundColor = '#f39c12';
        status.textContent = "Logging in...";
        status.style.color = "#f39c12";

        setTimeout(function() {
            // Simulate a successful login
            status.textContent = `Welcome, ${username}!`;
            status.style.color = "#2ecc71";
            document.querySelector('.login-box').style.backgroundColor = '#2ecc71';

            // Simulate a color change after success
            setTimeout(() => {
                document.querySelector('.login-box').style.backgroundColor = '#fff';
                loginBtn.disabled = false;
                loginBtn.innerHTML = "Login";
            }, 1000);
        }, 2000);
    }
});
