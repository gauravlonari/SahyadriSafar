<<<<<<< HEAD
if(sessionStorage.getItem('userLoggedInFlag')=="false" || sessionStorage.getItem('userLoggedInFlag')==null){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    window.location.replace("../html/login.html");
}
else{
    visitedCookie();
}
window.onload=function (){
    LoginDB();
}

var bookingName="",bookingemail="",bookingcontact=0,bookingaddress="",bookingNoP=0,bookingtrekName="",bookingtrekPlan="";

function nextStep(){
    bookingtrekPlan=document.forms.booking.plan.value;
    bookingcontact=document.forms.booking.contact.value;
    bookingAddress=document.forms.booking.address.value;
    bookingNoP=document.forms.booking.NoC.value;
    var localname=localStorage.getItem("validName");
    var localuser=localStorage.getItem("validUser");
    if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
        bookingName=localname.split(' ')[0]+" "+localname.split(' ')[1];
        bookingemail=localuser.split(' ')[0];
    }
    else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
        bookingName=localname.split(' ')[2]+" "+localname.split(' ')[3];
        bookingemail=localuser.split(' ')[1];
    }
    var selecttrek=document.forms.booking.selectedTrek;
    bookingtrekName=selecttrek.options[selecttrek.selectedIndex].innerHTML;
    document.getElementById("Name").innerHTML=bookingName;
    document.getElementById("Username").innerHTML=bookingemail;
    document.getElementById("contact").innerHTML=bookingcontact;
    document.getElementById("address").innerHTML=bookingaddress;
    document.getElementById("NoP").innerHTML=bookingNoP;
    document.getElementById("trekPlan").innerHTML=bookingtrekPlan;
    document.getElementById("trekName").innerHTML=bookingtrekName;
    document.getElementById("trekStartLocation").innerHTML="Shivajinagar, Pune";
    document.getElementById("reportingTime:").innerHTML="6 am.";
}
function loadTreks(){
    var selplan=document.forms.booking.plan.value;
    if(selplan=="Gold"){
        document.getElementById("selectedTrek").innerHTML="<option>Sinhgad Fort - Rajgad Fort - Torana Fort - Raigad Fort</option><option>Sinhgad Fort - Rajgad Fort - Torana Fort</option><option>Rajagd Fort - Rohida Fort - Raigad Fort</option><option>Panhala Fort - Vishalgad Fort</option><option>Rajgad Fort to Raigad Fort (via Boratyachi Nal)</option><option>Rajgad Fort to Raigad Fort (via Singapur Nal)</option>";
    }
    else if(selplan=="Silver"){
        document.getElementById("selectedTrek").innerHTML="<option>Rajgad to Torana Rajgad Trek</option><option>Lohagad-Visapur Trek</option><option>Sinhagad to Rajgad Range Trek</option><option>Harishchandra Fort</option><option>Vasota Fort (Wild Trek)</option><option>Lingana Fort (Climbing)</option><option>Pavan Khind</option>";
    }
    else{
        document.getElementById("selectedTrek").innerHTML="<option>Railing Pathar</option><option>Katraj to sinhgad</option><option>Jeevdhan Fort Trek</option><option>Rajmachi Trek</option><option>Raigad Trek</option><option>Panshet lake Camping</option><option>Pawana lake Camping</option><option>Tikona Fort</option><option>Hadar Fort</option><option>Shivneri Fort</option>";
    }
=======
if(sessionStorage.getItem('userLoggedInFlag')=="false" || sessionStorage.getItem('userLoggedInFlag')==null){
    sessionStorage.setItem("PagetoRedirect",window.location.href);
    window.location.replace("../html/login.html");
}
else{
    visitedCookie();
}
window.onload=function (){
    LoginDB();
}

var bookingName="",bookingemail="",bookingcontact=0,bookingaddress="",bookingNoP=0,bookingtrekName="",bookingtrekPlan="";

function nextStep(){
    bookingtrekPlan=document.forms.booking.plan.value;
    bookingcontact=document.forms.booking.contact.value;
    bookingAddress=document.forms.booking.address.value;
    bookingNoP=document.forms.booking.NoC.value;
    var localname=localStorage.getItem("validName");
    var localuser=localStorage.getItem("validUser");
    if(sessionStorage.getItem("cryptous")=="lgaurav37@gmail.com"){
        bookingName=localname.split(' ')[0]+" "+localname.split(' ')[1];
        bookingemail=localuser.split(' ')[0];
    }
    else if(sessionStorage.getItem("cryptous")=="nisargnavale3131@gmail.com"){
        bookingName=localname.split(' ')[2]+" "+localname.split(' ')[3];
        bookingemail=localuser.split(' ')[1];
    }
    var selecttrek=document.forms.booking.selectedTrek;
    bookingtrekName=selecttrek.options[selecttrek.selectedIndex].innerHTML;
    document.getElementById("Name").innerHTML=bookingName;
    document.getElementById("Username").innerHTML=bookingemail;
    document.getElementById("contact").innerHTML=bookingcontact;
    document.getElementById("address").innerHTML=bookingaddress;
    document.getElementById("NoP").innerHTML=bookingNoP;
    document.getElementById("trekPlan").innerHTML=bookingtrekPlan;
    document.getElementById("trekName").innerHTML=bookingtrekName;
    document.getElementById("trekStartLocation").innerHTML="Shivajinagar, Pune";
    document.getElementById("reportingTime:").innerHTML="6 am.";
}
function loadTreks(){
    var selplan=document.forms.booking.plan.value;
    if(selplan=="Gold"){
        document.getElementById("selectedTrek").innerHTML="<option>Sinhgad Fort - Rajgad Fort - Torana Fort - Raigad Fort</option><option>Sinhgad Fort - Rajgad Fort - Torana Fort</option><option>Rajagd Fort - Rohida Fort - Raigad Fort</option><option>Panhala Fort - Vishalgad Fort</option><option>Rajgad Fort to Raigad Fort (via Boratyachi Nal)</option><option>Rajgad Fort to Raigad Fort (via Singapur Nal)</option>";
    }
    else if(selplan=="Silver"){
        document.getElementById("selectedTrek").innerHTML="<option>Rajgad to Torana Rajgad Trek</option><option>Lohagad-Visapur Trek</option><option>Sinhagad to Rajgad Range Trek</option><option>Harishchandra Fort</option><option>Vasota Fort (Wild Trek)</option><option>Lingana Fort (Climbing)</option><option>Pavan Khind</option>";
    }
    else{
        document.getElementById("selectedTrek").innerHTML="<option>Railing Pathar</option><option>Katraj to sinhgad</option><option>Jeevdhan Fort Trek</option><option>Rajmachi Trek</option><option>Raigad Trek</option><option>Panshet lake Camping</option><option>Pawana lake Camping</option><option>Tikona Fort</option><option>Hadar Fort</option><option>Shivneri Fort</option>";
    }
>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
}