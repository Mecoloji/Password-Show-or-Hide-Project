const passwordInput = document.querySelector("input");
const btn = document.querySelector("span i");


btn.addEventListener("click", () => {
    if ( passwordInput.type === "password" ) {
        passwordInput.type = "text";
        btn.classList.add("hide-btn");
    }else {
        passwordInput.type = "password";
        btn.classList.remove("hide-btn");
    };
})