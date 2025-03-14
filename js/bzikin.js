let index = 0;

function prevslide(){
    if(index == 0){
        index = 1;
        document.getElementById("slide").src = `img/bzikincarpeta/${index}.jpg`;
    }
    else{--index;
    document.getElementById("slide").src = `img/bzikincarpeta/${index}.jpg`;
    }
}

function nextslide(){
    if(index == 1){
        index = 0;
        document.getElementById("slide").src = `img/bzikincarpeta/${index}.jpg`; 
        
    }
    else{
        index++;
        document.getElementById("slide").src = `img/bzikincarpeta/${index}.jpg`;
    }

}