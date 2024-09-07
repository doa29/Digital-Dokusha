

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
        alert('Email already registered. Please choose another.');
        return;
    }
    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert(`Account created successfully for ${fullName} with email ${email}!`);
    window.location.href = "loginindex.html";
});
function login() {
window.location.href='loginindex.html'
}
