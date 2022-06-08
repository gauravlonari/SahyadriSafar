var noImages=40;
var imagelimit=15;
moreBtnCounter=0;
window.onload=function(){
    LoginDB();
    visitedCookie();
    initilizeQry();
    viewPassedImage();
    loadImagesInGallery();
}
function moreImagebutton(){
    moreBtnCounter++;
    var templimit=imagelimit;
    let gallery=document.getElementById('galleryContainer');
    for(var i=0;i<moreBtnCounter;i++){
        templimit+=imagelimit;
    }
    for(var i=(templimit-imagelimit),j=1;i<templimit;i++){
        if(i<noImages)
            gallery.childNodes[i+j].style.display="inline";
        else{
            hideMoreBtn();
            break;
        }
    }
}
function hideMoreBtn(){
    document.getElementById('moreBtn').style.display="none";
}
function view(source){
    document.getElementById("view").src=source;
    document.getElementById("noBgView").style.display="block";
    document.getElementById("SafarGallery").style.opacity="0.6";
}
function hideView(){
    document.getElementById("noBgView").style.display="none";
    document.getElementById("SafarGallery").style.opacity="1";
}
function viewPassedImage(){
    for (i=0;i<qry.length;i++){
        if(qry[i][0]=="imgName"){
            view("../Res/Photos/Gallery/"+qry[i][1]);
        }
    }
}
function loadImagesInGallery(){
    var noPages=(noImages/imagelimit);
    var img=new Array();
    var templimit=imagelimit;
    let gallery=document.getElementById('galleryContainer');
    for(var i=0,page=0,j=1;i<noImages;i++){
        if(page==0){
            img[i+j]=document.createElement('img');
            img[i+j].src="../Res/Photos/Gallery/gallery ("+(i+j)+").jpg";
            img[i+j].setAttribute("onclick","view(this.src)");
            gallery.appendChild(img[i+j]);
        }
        else{
            img[i+j]=document.createElement('img');
            img[i+j].src="../Res/Photos/Gallery/gallery ("+(i+j)+").jpg";
            img[i+j].setAttribute("onclick","view(this.src)");
            img[i+j].style.display="none";
            gallery.appendChild(img[i+j]);
        }
        if(i+j>templimit)
        {
            page++;
            templimit+=imagelimit;
        }
    }

}