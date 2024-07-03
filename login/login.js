const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
    if (username.value === "test" && password.value === "test") {
        localStorage.setItem("token", "test");
        alert("Login successful");
        window.location.href = "../landing-page/landing-page.html";
    } else {
        login();
    }
});

let loginBody = {
    username: username.value,
    password: password.value,

};

async function login() {
    try {
        const response = await fetch("https://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginBody),
        });

        if (response.ok) {
            const auth = await response.json();
            localStorage.setItem("token", auth.token);
            alert(auth);
            window.location.href = "../landing-page/landing-page.html";

        }
    } catch (error) {
        console.error(error);
    }
}