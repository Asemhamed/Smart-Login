var inputName = document.querySelector("#inputName");
var inputEmail = document.querySelector("#inputEmail");
var inputPass = document.querySelector("#inputPass");
var signUpBtn = document.querySelector("#signUpBtn");
var signUpAlert = document.querySelector(".signUpAlert");
var emailAlert = document.querySelector(".emailAlert");
var usersList = [];


if(localStorage.getItem("users")){
    usersList = JSON.parse(localStorage.getItem("users"));
}

var regexName = new RegExp(inputName.getAttribute('data-regex'));
var regexEmail = new RegExp(inputEmail.getAttribute('data-regex'));


signUpBtn.addEventListener('click',function (e){

    user = {
        Name: inputName.value,
        Email: inputEmail.value,
        Password: inputPass.value
    }
    if(user.Name===''||user.Email===''||user.Password===''){
        signUpAlert.classList.replace('d-none','d-block');
        emailAlert.classList.replace('d-block','d-none');
    }else if(checkEmailExist(user.Email)){
        emailAlert.classList.replace('d-none','d-block');
        signUpAlert.classList.replace('d-block','d-none');
    }else if(!regexName.test(user.Name)){
        inputName.nextElementSibling.classList.replace('d-none','d-block');
        signUpAlert.classList.replace('d-block','d-none');
        emailAlert.classList.replace('d-block','d-none');
    }else if(!regexEmail.test(user.Email)){
        inputEmail.nextElementSibling.classList.replace('d-none','d-block');
        inputName.nextElementSibling.classList.replace('d-block','d-none');
        signUpAlert.classList.replace('d-block','d-none');
        emailAlert.classList.replace('d-block','d-none');
    }
    else{
        signUpAlert.classList.replace('d-block','d-none');
        usersList.push(user);
        localStorage.setItem('users',JSON.stringify(usersList));
        signUpBtn.href='../index.html';
    }
})
// fitch all values input

// push in Array
// update localStorage
// check if email exist
function checkEmailExist(email){
    for(var i =0;i<usersList.length;i++){
        if(usersList[i].Email===email){
            return true;
        }
    }
    return false;
}
// if correct move to log in page

