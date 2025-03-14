let index = 0;

function prevslide(){
    if(index == 0){
        index = 3;
        document.getElementById("slide").src = `img/uda23carpeta/${index}.jpg`;
    }
    else{--index;
    document.getElementById("slide").src = `img/uda23carpeta/${index}.jpg`;
    }
}

function nextslide(){
    if(index == 3){
        index = 0;
        document.getElementById("slide").src = `img/uda23carpeta/${index}.jpg`; 
        
    }
    else{
        index++;
        document.getElementById("slide").src = `img/uda23carpeta/${index}.jpg`;
    }

}