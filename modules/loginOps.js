import {app} from "./firebaseApp.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
const db = getFirestore(app);
// try {
//     const docRef = await addDoc(collection(db, "Users"), {
//         first: "Gaurav",
//         last: "Lonari",
//         born: 2003
//     });
//     alert("Document written with ID: ", docRef.id);
// } catch (e) {
//     alert("Error adding document: ", e);
// }

document.querySelector(".loginBtn").addEventListener("click",function(){

    let inputError=document.querySelector(".inputError#inputError");
    var emailexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailexp.test(document.forms.login.username.value)){
        inputError.innerHTML="Enter Valid E-mail Address.";
    }
    else{
        var localus,localps;
        localus=localStorage.getItem("validUser");
        localps=localStorage.getItem("validPass");
        if((localus.split(" ")[0]==document.forms.login.username.value && localps.split(" ")[0]==document.forms.login.password.value) || (localus.split(" ")[1]==document.forms.login.username.value && localps.split(" ")[1]==document.forms.login.password.value) ){
            inputError.style.color="GREEN";
            inputError.style.textAlign="center";
            inputError.innerHTML="Login Successful. Processing";
            sessionStorage.setItem('cryptous',document.forms.login.username.value);
            sessionStorage.setItem('cryptops',document.forms.login.password.value);
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

})