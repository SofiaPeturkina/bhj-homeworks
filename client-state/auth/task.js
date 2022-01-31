const signin = document.getElementById("signin");
const signinButton = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");
const logoutButton = document.getElementById("logout__btn");
const signinForm = document.getElementById("signin__form");

if (localStorage.getItem("id")) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active"); 
    userIdSpan.innerText = localStorage.getItem("id");
};

signinButton.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const success = JSON.parse(xhr.responseText).success;
            if (success === true) {
                const userId = JSON.parse(xhr.responseText).user_id;
                localStorage.setItem("id", userId);
                userIdSpan.innerText = localStorage.getItem("id");
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
            } else {
                alert("Неверный логин/пароль");
                signinForm.reset();
            }
        }
    });    
});

logoutButton.addEventListener("click", () => {
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
    localStorage.removeItem("id");
    signinForm.reset();
});





