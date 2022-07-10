<<<<<<< HEAD
window.onscroll=function (){
    shrinkHeader();
}

function shrinkHeader(){
    let logo=document.getElementById("logo");
    if((document.body.scrollTop > 50 ) || (document.documentElement.scrollTop > 50))
    {
        logo.style.width="12%";
    }
    else{
        logo.style.width="15%";
    }
}
=======
window.onscroll=function (){
    shrinkHeader();
}

function shrinkHeader(){
    let logo=document.getElementById("logo");
    if((document.body.scrollTop > 50 ) || (document.documentElement.scrollTop > 50))
    {
        logo.style.width="12%";
    }
    else{
        logo.style.width="15%";
    }
}
>>>>>>> 8844580ac25f9d27751a40509cbdb86d18c67c93
