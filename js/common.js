<<<<<<< HEAD
document.addEventListener("contextmenu", function(e){e.preventDefault();popupWindow("No-Context Window","Right Click is Disabled.");}, false);
var popwin,qry;
function popupWindow(titletext,text){
    if(titletext==undefined)
        titletext="";
    var h=100;
    var w=400;
    var tops=(screen.height/2)-h/2-100;
    var wid=(screen.width/2)-w/2;
    popwin=window.open("../html/newWindow.html","popupWindow","toolbar=no, location=no, directories=no, status=0, menubar=no, scrollbars=no, resizable=no, copyhistory=no,height="+h+",width="+w+",top="+tops+",left="+wid);
    popwin.onload=function (){
        popwin.document.title=titletext;    
        popwin.document.getElementById("msg").innerHTML=text;
    }
    setTimeout("removeContextWin()",5000);
}
function removeContextWin(){
    popwin.close();
}
function visitedCookie(){
    var today=new Date;
    var visit=today.toUTCString().split(' ')[0]+" "+today.getDate()+" "+today.toUTCString().split(' ')[2]+" "+today.getFullYear();
    var lastvisit;
    if(document.cookie.includes("SahyadriSafarLastVisit")){
        lastvisit=document.cookie.substring(document.cookie.indexOf("SahyadriSafarLastVisit")).split(';')[0].split('=')[1];
        if(sessionStorage.getItem("LastVisitShown")!="true"){
            popupWindow("Last Visit to SahyadriSafar.in","You Last Visited on: "+lastvisit);
            sessionStorage.setItem("LastVisitShown","true");
        }
    }
    document.cookie="SahyadriSafarLastVisit="+visit+";";
}
function initilizeQry(){
    let arr=location.search.substring(1).split("&");
    qry=new Array(arr.length);
    for (i=0;i<arr.length;i++){
        qry[i]=new Array(2);
        qry[i][0]=arr[i].split("=")[0];
        qry[i][1]=arr[i].split("=")[1];
    }
=======
document.addEventListener("contextmenu", function(e){e.preventDefault();popupWindow("No-Context Window","Right Click is Disabled.");}, false);
var popwin,qry;
function popupWindow(titletext,text){
    if(titletext==undefined)
        titletext="";
    var h=100;
    var w=400;
    var tops=(screen.height/2)-h/2-100;
    var wid=(screen.width/2)-w/2;
    popwin=window.open("../html/newWindow.html","popupWindow","toolbar=no, location=no, directories=no, status=0, menubar=no, scrollbars=no, resizable=no, copyhistory=no,height="+h+",width="+w+",top="+tops+",left="+wid);
    popwin.onload=function (){
        popwin.document.title=titletext;    
        popwin.document.getElementById("msg").innerHTML=text;
    }
    setTimeout("removeContextWin()",5000);
}
function removeContextWin(){
    popwin.close();
}
function visitedCookie(){
    var today=new Date;
    var visit=today.toUTCString().split(' ')[0]+" "+today.getDate()+" "+today.toUTCString().split(' ')[2]+" "+today.getFullYear();
    var lastvisit;
    if(document.cookie.includes("SahyadriSafarLastVisit")){
        lastvisit=document.cookie.substring(document.cookie.indexOf("SahyadriSafarLastVisit")).split(';')[0].split('=')[1];
        if(sessionStorage.getItem("LastVisitShown")!="true"){
            popupWindow("Last Visit to SahyadriSafar.in","You Last Visited on: "+lastvisit);
            sessionStorage.setItem("LastVisitShown","true");
        }
    }
    document.cookie="SahyadriSafarLastVisit="+visit+";";
}
function initilizeQry(){
    let arr=location.search.substring(1).split("&");
    qry=new Array(arr.length);
    for (i=0;i<arr.length;i++){
        qry[i]=new Array(2);
        qry[i][0]=arr[i].split("=")[0];
        qry[i][1]=arr[i].split("=")[1];
    }
>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
}