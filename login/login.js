const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const testBtn = document.getElementById("test");

loginBtn.addEventListener("click", function () {
        localStorage.removeItem("token");
        login();
});

testBtn.addEventListener("click", function () {
    localStorage.setItem("token", "test");
    window.location.href = "../landing-page/landing-page.html";
});



async function login() {

    
    try {
        const response = await fetch("http://localhost:8080/test/login/" + username.value);
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));

        if (response.ok) {
            window.location.href = "../landing-page/landing-page.html";

        }

    } catch (error) {
        console.error(error);
        alert("That didn't work :( \n \nYou probably want the test button, unless you want to go through the trouble of running the most recent version of VetRA API locally.");
    }
}


// let loginBody = {
//     username: username.value,
//     password: password.value,

// };



// async function login() {
//     try {
//         const response = await fetch("http://localhost:8080/auth/login", {
//             method: "POST",
//             body: JSON.stringify(loginBody),
//         });

//         if (response.ok) {
//             const auth = await response.json();
//             localStorage.setItem("token", auth.token);
//             alert(auth);
//             window.location.href = "../landing-page/landing-page.html";

//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
