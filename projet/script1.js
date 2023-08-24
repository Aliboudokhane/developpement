let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    }else{
        header.classList.remove('active')
    }
}
document.addEventListener('keydown', keyPress)
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone");
let phoneRegEx = new RegExp(/^[0-9]g/);


name1.addEventListener("change", function () {
    if (name1.value.length < 2) {
        alert("the name must be at least 2 characters");
        name1.focus();
    }
});
email.addEventListener("change", function () {
    if (!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", );
        email.focus();
    }
});
phoneNumber.addEventListener("change", function () {
    if (phoneNumber.value.length < 8) {
        alert("the phone number should contain 8 digits");

        phoneNumber.focus();
    }
    if (!phoneRegEx.test(phoneNumber.value)) {
        alert("the phone number should contain only number");

        phoneNumber.focus();
    }
});