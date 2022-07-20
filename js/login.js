if(sessionStorage.getItem('userLoggedInFlag')=="true"){
    window.location.replace("../index.html");
}
else{
    visitedCookie();
}
window.onload=function (){
    document.forms.login.addEventListener("keypress",function(event){
        if(event.keyCode == 13)
        validateLogin();
    });
}