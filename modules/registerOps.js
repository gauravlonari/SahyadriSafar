// import {app} from "./firebaseApp.js";
// import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
// const db = getFirestore(app);
// const auth=getAuth(app);

document.querySelector(".registerBtn").addEventListener("click",function(){
    let inputError=document.querySelector(".inputError#inputError");
    var emailexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mobileexp=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

    let fname=document.forms.register.fname.value.trim();
    let lname=document.forms.register.lname.value.trim();
    let age=Number(document.forms.register.age.value);
    let mobile=document.forms.register.mobile.value;
    let email=document.forms.register.username.value.trim();
    let pass=document.forms.register.password.value.trim();

    if(!fname){
        inputError.innerHTML="Invalid First Name";
    }
    else if(!lname){
        inputError.innerHTML="Invalid Last Name";
    }
    else if(!age){
        inputError.innerHTML="Invalid Age";
    }
    else if(age<13 || age>80){
        inputError.innerHTML="Age should be between 13-80 years";
    }
    else if(!mobileexp.test(mobile)){
        inputError.innerHTML="Invalid Mobile Number";
    }
    else if(!emailexp.test(email)){
        inputError.innerHTML="Enter Valid E-mail Address.";
    }
    else if(pass.length < 6 || !pass){
        inputError.innerHTML="Enter a valid password.";
    }
    else{
        inputError.innerHTML="";
        



        var localus,localps;
        localus=localStorage.getItem("validUser");
        localps=localStorage.getItem("validPass");
        if((localus.split(" ")[0]==document.forms.register.username.value && localps.split(" ")[0]==document.forms.register.password.value) || (localus.split(" ")[1]==document.forms.register.username.value && localps.split(" ")[1]==document.forms.register.password.value) ){
            inputError.style.color="GREEN";
            inputError.style.textAlign="center";
            inputError.innerHTML="Registration Successful. Processing";
            sessionStorage.setItem('cryptous',document.forms.register.username.value);
            sessionStorage.setItem('cryptops',document.forms.register.password.value);
            sessionStorage.setItem('userLoggedInFlag',"true");
            if(sessionStorage.getItem("PagetoRedirect")=="" || sessionStorage.getItem("PagetoRedirect").includes("index.html"))
                window.location.replace("../index.html");
            else
                window.location.replace(sessionStorage.getItem("PagetoRedirect"));
        }
        else{
            inputError.innerHTML="Username or Password you entered is incorrect.";
        }
    }
});