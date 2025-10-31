var loginAlert = document.querySelector('.loginAlert');
var loginAlertInputs = document.querySelector('.loginAlertInputs');
var inputPass = document.querySelector('#inputPass');
var inputEmail = document.querySelector('#inputEmail');
var loginBtn = document.querySelector('#loginBtn');
var searchList = [];
var userName = '';

if(localStorage.getItem("users")){
    searchList = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener('click',function(){
    user = {
        email: inputEmail.value,
        password: inputPass.value
    }
    if(user.email===''||user.password===''){
        loginAlertInputs.classList.replace('d-none','d-block');
        loginAlert.classList.replace('d-block','d-none');
    }else if(checkValidUser(user)){
        loginBtn.setAttribute('href','pages/welcom-page.html');
        localStorage.setItem('name',userName);
    }else{
        loginAlertInputs.classList.replace('d-block','d-none');
        loginAlert.classList.replace('d-none','d-block');
    }
})



// 1.fetch values inputs 
// 2.check if name and password true then move to home page
function checkValidUser(user){
    for(var i = 0; i<searchList.length ; i++){
        if(searchList[i].Email===user.email&&searchList[i].Password===user.password){
            userName = searchList[i].Name;
            return true;
        }
    }
    return false ;
}