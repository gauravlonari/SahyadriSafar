<<<<<<< HEAD
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

function validateLogin(){
    var emailexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    with(document.forms.login){
        if(!emailexp.test(username.value)){
            inputError.innerHTML="Enter Valid E-mail Address.";
        }
        else{
            var localus,localps;
            localus=localStorage.getItem("validUser");
            localps=localStorage.getItem("validPass");
            if((localus.split(" ")[0]==username.value && localps.split(" ")[0]==password.value) || (localus.split(" ")[1]==username.value && localps.split(" ")[1]==password.value) ){
                inputError.style.color="GREEN";
                inputError.style.textAlign="center";
                inputError.innerHTML="Login Successful. Processing";
                sessionStorage.setItem('cryptous',username.value);
                sessionStorage.setItem('cryptops',password.value);
                sessionStorage.setItem('userLoggedInFlag',"true");
                if(sessionStorage.getItem("PagetoRedirect")=="" || sessionStorage.getItem("PagetoRedirect").includes("index.html"))
                    window.location.replace("../index.html");
                else
                    window.location.replace(sessionStorage.getItem("PagetoRedirect"));
            }
            else{
                inputError.innerHTML="Username or Password you entered is incorrect."
            }
        }
    }
=======
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

function validateLogin(){
    var emailexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    with(document.forms.login){
        if(!emailexp.test(username.value)){
            inputError.innerHTML="Enter Valid E-mail Address.";
        }
        else{
            var localus,localps;
            localus=localStorage.getItem("validUser");
            localps=localStorage.getItem("validPass");
            if((localus.split(" ")[0]==username.value && localps.split(" ")[0]==password.value) || (localus.split(" ")[1]==username.value && localps.split(" ")[1]==password.value) ){
                inputError.style.color="GREEN";
                inputError.style.textAlign="center";
                inputError.innerHTML="Login Successful. Processing";
                sessionStorage.setItem('cryptous',username.value);
                sessionStorage.setItem('cryptops',password.value);
                sessionStorage.setItem('userLoggedInFlag',"true");
                if(sessionStorage.getItem("PagetoRedirect")=="" || sessionStorage.getItem("PagetoRedirect").includes("index.html"))
                    window.location.replace("../index.html");
                else
                    window.location.replace(sessionStorage.getItem("PagetoRedirect"));
            }
            else{
                inputError.innerHTML="Username or Password you entered is incorrect."
            }
        }
    }
>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
}