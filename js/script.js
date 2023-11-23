const images= document.getElementsByClassName("img-container");
console.log(images);
var contatoreImg=0;

function carosello(){
    
    if( contatoreImg < images.length - 1){
        document.getElementById("next").classList.remove("img-no");
        images[contatoreImg].classList.remove("img-yes");
        console.log("statore contatore",contatoreImg)
        contatoreImg++;
        images[contatoreImg].classList.add("img-yes");
    }
    // if(contatoreImg === images.length-1){
    //     images[contatoreImg-1].classList.remove("img-yes");
    //     images[contatoreImg].classList.add("img-no");
    // }

    if(contatoreImg === images.length - 1){
        document.getElementById("next").classList.add("img-no");
    }
}
function carosello2(){
    console.log("statore contatore",contatoreImg)
    images[contatoreImg].classList.remove("img-yes");
    contatoreImg--;
    images[contatoreImg].classList.add("img-yes");

}
if(contatoreImg === images.length - 1){
    document.getElementById("prev").classList.add("img-no");
    document.getElementById("next").classList.remove("img-no");
}

// console.log(contatoreImg)