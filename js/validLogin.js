<<<<<<< HEAD
function LoginDB(){
    localStorage.setItem("validUser","lgaurav37@gmail.com nisargnavale3131@gmail.com");
    localStorage.setItem("validPass","Lgaurav@77 nnavale");
    localStorage.setItem("validName","Gaurav Lonari Nisarg Navale");
    if(sessionStorage.getItem("userLoggedInFlag")=="false"){
        sessionStorage.setItem("userLoggedInFlag","false");
    }
    else if(sessionStorage.getItem("userLoggedInFlag")=="true"){
        if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
            if(!window.location.href.includes("profile.html")){
                document.getElementById("profileTab").innerHTML=localStorage.getItem('validName').split(' ')[0];
                document.getElementById("profileTab").href="/html/profile.html";
                document.getElementById("profileTab").title="View Profile";
            }
            addLogout();
        }
        else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
            if(!window.location.href.includes("profile.html")){
                document.getElementById("profileTab").innerHTML=localStorage.getItem('validName').split(' ')[2];
                document.getElementById("profileTab").href="/html/profile.html";
                document.getElementById("profileTab").title="View Profile";
            }   
            addLogout();
        }
        else{
            sessionStorage.setItem("userLoggedInFlag","false");
        }
    }
}
function addLogout(){
    if(sessionStorage.getItem("userLoggedInFlag")=="true"){
        var li=document.createElement('li');
        var a=document.createElement('a');
        a.innerHTML="Logout";
        a.setAttribute("onclick","logoutUser();");
        a.setAttribute("class","tab");
        a.title="Logout";
        li.appendChild(a);
        document.getElementById("Tabs").appendChild(li);
    }
}
function logoutUser(){
    sessionStorage.removeItem('cryptous');
    sessionStorage.removeItem('cryptops');
    sessionStorage.setItem('userLoggedInFlag',"false");
    window.location.reload();
}
function loginUser(){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    if(window.location.href.includes("index.html"))
        window.location.href="/html/login.html"
    else
        window.location.href="../html/login.html";

=======
function LoginDB(){
    localStorage.setItem("validUser","lgaurav37@gmail.com nisargnavale3131@gmail.com");
    localStorage.setItem("validPass","Lgaurav@77 nnavale");
    localStorage.setItem("validName","Gaurav Lonari Nisarg Navale");
    if(sessionStorage.getItem("userLoggedInFlag")=="false"){
        sessionStorage.setItem("userLoggedInFlag","false");
    }
    else if(sessionStorage.getItem("userLoggedInFlag")=="true"){
        if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
            if(!window.location.href.includes("profile.html")){
                document.getElementById("profileTab").innerHTML=localStorage.getItem('validName').split(' ')[0];
                document.getElementById("profileTab").href="/html/profile.html";
                document.getElementById("profileTab").title="View Profile";
            }
            addLogout();
        }
        else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
            if(!window.location.href.includes("profile.html")){
                document.getElementById("profileTab").innerHTML=localStorage.getItem('validName').split(' ')[2];
                document.getElementById("profileTab").href="/html/profile.html";
                document.getElementById("profileTab").title="View Profile";
            }   
            addLogout();
        }
        else{
            sessionStorage.setItem("userLoggedInFlag","false");
        }
    }
}
function addLogout(){
    if(sessionStorage.getItem("userLoggedInFlag")=="true"){
        var li=document.createElement('li');
        var a=document.createElement('a');
        a.innerHTML="Logout";
        a.setAttribute("onclick","logoutUser();");
        a.setAttribute("class","tab");
        a.title="Logout";
        li.appendChild(a);
        document.getElementById("Tabs").appendChild(li);
    }
}
function logoutUser(){
    sessionStorage.removeItem('cryptous');
    sessionStorage.removeItem('cryptops');
    sessionStorage.setItem('userLoggedInFlag',"false");
    window.location.reload();
}
function loginUser(){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    if(window.location.href.includes("index.html"))
        window.location.href="/html/login.html"
    else
        window.location.href="../html/login.html";

>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
}