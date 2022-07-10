<<<<<<< HEAD
if(sessionStorage.getItem('userLoggedInFlag')=="false" || sessionStorage.getItem('userLoggedInFlag')==null){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    window.location.replace("../html/login.html");
}
else{
    visitedCookie();
}
window.onload=function(){
    LoginDB();
    loadProfile();
}
function loadProfile(){
    var localname=localStorage.getItem("validName");
    var localuser=localStorage.getItem("validUser");
    if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
        document.getElementById("profileName").innerHTML=localname.split(' ')[0]+" "+localname.split(' ')[1];
        document.getElementById("profileUsername").innerHTML=localuser.split(' ')[0];
        document.getElementById("profilePhoto").src="../Res/Photos/creator1.jpg";
    }
    else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
        document.getElementById("profileName").innerHTML=localname.split(' ')[2]+" "+localname.split(' ')[3];
        document.getElementById("profileUsername").innerHTML=localuser.split(' ')[1];    
        document.getElementById("profilePhoto").src="../Res/Photos/creator2.jpg";
    }
=======
if(sessionStorage.getItem('userLoggedInFlag')=="false" || sessionStorage.getItem('userLoggedInFlag')==null){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    window.location.replace("../html/login.html");
}
else{
    visitedCookie();
}
window.onload=function(){
    LoginDB();
    loadProfile();
}
function loadProfile(){
    var localname=localStorage.getItem("validName");
    var localuser=localStorage.getItem("validUser");
    if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
        document.getElementById("profileName").innerHTML=localname.split(' ')[0]+" "+localname.split(' ')[1];
        document.getElementById("profileUsername").innerHTML=localuser.split(' ')[0];
        document.getElementById("profilePhoto").src="../Res/Photos/creator1.jpg";
    }
    else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
        document.getElementById("profileName").innerHTML=localname.split(' ')[2]+" "+localname.split(' ')[3];
        document.getElementById("profileUsername").innerHTML=localuser.split(' ')[1];    
        document.getElementById("profilePhoto").src="../Res/Photos/creator2.jpg";
    }
>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
}