var welcomeTag = document.querySelector('#welcomeTag');

if(welcomeTag){
    welcomeTag.innerHTML +=localStorage.getItem('name'); 
}