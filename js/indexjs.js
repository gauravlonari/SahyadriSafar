window.onscroll=function(){
    slides();
}
window.onload=function(){
    LoginDB();
    visitedCookie();
    startSlideShow();
}
let scrollFactor =300;
scrollFactor-=8;
function slides(){
    let s1,s2,s3,s4,s5;
    let bodyHeight=((5*(window.innerHeight+scrollFactor))/window.innerHeight)*100;
    document.body.style.height=Math.ceil(bodyHeight)+"vh";
    s1=document.getElementById("container_1");
    s2=document.getElementById("container_2");
    s3=document.getElementById("container_3");
    s4=document.getElementById("container_4");
    s5=document.getElementById("container_5");
     if(document.documentElement.scrollTop < (window.innerHeight+scrollFactor)){
        s1.style.top=0;
        s2.style.top=0;
        s3.style.top=0;
        s4.style.top=0;
        s5.style.top=0;
        toggle(0);
        enableHeader();
        growHeader();
    }
    else if((document.body.scrollTop >(window.innerHeight+scrollFactor) && document.body.scrollTop<2*(window.innerHeight+scrollFactor) ) || (document.documentElement.scrollTop > (window.innerHeight+scrollFactor) && document.documentElement.scrollTop<2*(window.innerHeight+scrollFactor))){
        s1.style.transition="1s";
        s1.style.top="-100%";
        s2.style.top=0;
        s3.style.top=0;
        s4.style.top=0;
        s5.style.top=0;
        toggle(1);
        enableHeader();
        shrinkHeader();
    }
    else if((document.body.scrollTop >2*(window.innerHeight+scrollFactor) && document.body.scrollTop<3*(window.innerHeight+scrollFactor) ) || (document.documentElement.scrollTop > 2*(window.innerHeight+scrollFactor) && document.documentElement.scrollTop< 3*(window.innerHeight+scrollFactor))){
        s2.style.transition="1s";
        s1.style.top="-100%";
        s2.style.top="-100%";
        s3.style.top=0;
        s4.style.top=0;
        s5.style.top=0;
        
        toggle(2);
        enableHeader();
        shrinkHeader();        
    }
    else if((document.body.scrollTop >3*(window.innerHeight+scrollFactor) && document.body.scrollTop<4*(window.innerHeight+scrollFactor) ) || (document.documentElement.scrollTop > 3*(window.innerHeight+scrollFactor) && document.documentElement.scrollTop< 4*(window.innerHeight+scrollFactor))){
        s3.style.transition="1s";
        s1.style.top="-100%";
        s2.style.top="-100%";
        s3.style.top="-100%";
        s4.style.top=0;
        s5.style.top=0;
        
        toggle(3);
        enableHeader();
        shrinkHeader();
    }
    else if((document.body.scrollTop >4*(window.innerHeight+scrollFactor) && document.body.scrollTop<5*(window.innerHeight+scrollFactor) ) || (document.documentElement.scrollTop > 4*(window.innerHeight+scrollFactor) && document.documentElement.scrollTop< 5*(window.innerHeight+scrollFactor))){
        s4.style.transition="1s";
        s1.style.top="-100%";
        s2.style.top="-100%";
        s3.style.top="-100%";
        s4.style.top="-100%";
        s5.style.top=0;
        
        toggle(4);
        shrinkHeader();
        disableHeader();
    }
    else if((document.body.scrollTop >5*(window.innerHeight+scrollFactor) && document.body.scrollTop<6*(window.innerHeight+scrollFactor) ) || (document.documentElement.scrollTop > 5*(window.innerHeight+scrollFactor) && document.documentElement.scrollTop< 6*(window.innerHeight+scrollFactor))){
        s5.style.transition="1s";
        s1.style.top="-100%";
        s2.style.top="-100%";
        s3.style.top="-100%";
        s4.style.top="-100%";
        s5.style.top="-100%";
        
        toggle(5)
        shrinkHeader();
    }
    else{
        // s1.style.display="block";
        s1.style.top=0;
        s2.style.top=0;
        s3.style.top=0;
        s4.style.top=0;
        s5.style.top=0;
    }
}
function toggle(a){
    let sections=document.getElementsByClassName("navdots");
    switch(a){
        case 0:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(0,0,0,.25)";
            sections[2].style.background="rgba(0,0,0,.25)";
            sections[3].style.background="rgba(0,0,0,.25)";
            sections[4].style.background="rgba(0,0,0,.25)";
        break;
        case 1:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(0,0,0,.25)";
            sections[3].style.background="rgba(0,0,0,.25)";
            sections[4].style.background="rgba(0,0,0,.25)";
        break;
        case 2:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(255,0,0,1)";
            sections[3].style.background="rgba(0,0,0,.25)";
            sections[4].style.background="rgba(0,0,0,.25)";
        break;            
        case 3:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(255,0,0,1)";
            sections[3].style.background="rgba(255,0,0,1)";
            sections[4].style.background="rgba(0,0,0,.25)";
        break;            
        case 4:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(255,0,0,1)";
            sections[3].style.background="rgba(255,0,0,1)";
            sections[4].style.background="rgba(255,0,0,1)";
        break;            
        case 5:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(255,0,0,1)";
            sections[3].style.background="rgba(255,0,0,1)";
            sections[4].style.background="rgba(255,0,0,1)";
        break;
        case 6:
            sections[0].style.background="rgba(255,0,0,1)";
            sections[1].style.background="rgba(255,0,0,1)";
            sections[2].style.background="rgba(255,0,0,1)";
            sections[3].style.background="rgba(255,0,0,1)";
            sections[4].style.background="rgba(255,0,0,1)";
        break;
    }
}
function shrinkHeader(){
    let logo=document.getElementById("logo");
    logo.style.width="12%";
}
function growHeader(){
    let logo=document.getElementById("logo");
    logo.style.width="15%";
}
function navigate(section){
    let y;
    switch(section){ 
        case 'sec1':
            y=(0);
            document.documentElement.scrollTop=y;
        break;
        case 'sec2':
            y=(window.innerHeight+scrollFactor)+1;
            document.documentElement.scrollTop=y;
        break;
        case 'sec3':
            y=2*(window.innerHeight+scrollFactor)+1;
            document.documentElement.scrollTop=y;
        break;
        case 'sec4':
            y=3*(window.innerHeight+scrollFactor)+1;
            document.documentElement.scrollTop=y;
        break;
        case 'sec5':
            y=4*(window.innerHeight+scrollFactor)+1;
            document.documentElement.scrollTop=y;
        break;

    }
}

function dispdesc(value){
    let desc=document.getElementById("c2_desc");
    switch(value){
        case '1':
            desc.innerHTML="Two Guides are Available Throughtout the Journey"
        break;
        case '2':
            desc.innerHTML="Two Time Lunch is Provided";
        break;
        case '3':
            desc.innerHTML="Travel is Comfortable";
        break;
        case '4':
            desc.innerHTML="Night Camping is also Available"
        break;
        case '5':
            desc.innerHTML="Starting at just Rs-699";
        break;
        case '6':
            desc.innerHTML="100% Safe from Wild";
        break;
        case '7':
            desc.innerHTML="One Time Payment.No Hasslement Later";
        break;
        case '8':
            desc.innerHTML="Start Together ,End Together";
        break;
        case '9':
            desc.innerHTML="Special Emergency Team always Ready for Situations";
        break;
        default:
            desc.innerHTML="Our Services"
        break;
    }
}
function hgdesc(image){
    let parent=document.getElementsByClassName("hgdesc");
    // parent[image].style.display="inline";
    parent[image].style.opacity=100;
    
}
function hgdeschide(image){
    let parent=document.getElementsByClassName("hgdesc");
    // parent[image].style.display="none";
    parent[image].style.opacity=0;
}
function creatorInfo(profile){
    let info=document.getElementsByClassName("creatorInfo");
    info[profile].style.display="inline-block";
    let creator="creator"+(parseInt(profile)+1);
    document.getElementById(creator).style.color="white";
}
function creatorInfoHide(profile){
    let info=document.getElementsByClassName("creatorInfo");
    info[profile].style.display="none";
    let creator="creator"+(parseInt(profile)+1);
    document.getElementById(creator).style.color="black";
}
function disableHeader(){
    document.getElementById("Tabs").style.display="none";
}
function enableHeader(){
    document.getElementById("Tabs").style.display="flex";
}

function explore(plan){
    document.getElementById("noBgView").style.display="flex";
    var ul=document.getElementById("displayPlans");
    ul.innerHTML="";
    if(plan=="Standard"){
        document.getElementById("displayTitle").innerHTML="Standard Plans";
        document.getElementById("displayDesc").innerHTML="One Day Trek";
        ul.innerHTML="<li>Railing Pathar</li><li>Katraj to sinhgad</li><li>Jeevdhan fort Trek</li><li>Rajmachi Trek</li><li>Raigad Trek</li><li>Panshet lake Camping</li><li>Pawana lake Camping</li><li>Tikona fort</li><li>Hadar fort</li><li>Shivneri Fort</li>";
    }
    else if(plan=="Silver"){
        document.getElementById("displayTitle").innerHTML="Silver Plans";
        document.getElementById("displayDesc").innerHTML="Two Days Trek";
        ul.innerHTML="<li>Rajgad to Torana Rajgad Trek</li><li>Lohagad-Visapur Trek</li><li>Sinhagad to Rajgad Range Trek</li><li>Harishchandra Fort</li><li>Vasota fort(Wild Trek)</li><li>Lingana fort(Climbing)</li>";
    }
    else{
        document.getElementById("displayTitle").innerHTML="Gold Plans";
        document.getElementById("displayDesc").innerHTML="Hiking and Campains";
        ul.innerHTML="<li>Sinhgad Fort - Rajgad Fort - Torana Fort - Raigad Fort</li><li>Sinhgad Fort - Rajgad Fort - Torana Fort</li><li>Rajagd Fort - Rohida Fort - Raigad Fort</li><li>Panhala Fort - Vishalgad Fort</li><li>Rajgad Fort to Raigad Fort (via Boratyachi Nal)</li><li>Rajgad Fort to Raigad Fort (via Singapur Nal)</li>";    
    }
}
function hideView(){
    document.getElementById("noBgView").style.display="none";
}
function startSlideShow(){RotateBanner();}
function stopSlideShow(){
    if(slideShow!=null){
        clearTimeout(slideShow);
    }
}
var slideShow;
function RotateBanner(){
    var Banner=document.getElementById("highlightImage");
    let imgName="Res/Photos/Gallery/gallery ("+(Math.floor(Math.random()*40)+1)+").jpg";
    Banner.src=imgName;
    slideShow=setTimeout("RotateBanner()",1000);
}
function viewImgInGallery(img){
    var src=img.substring(img.lastIndexOf("gallery"));  
    window.location.href="html/gallery.html?imgName="+src+"&newvalue=Dominic";
}