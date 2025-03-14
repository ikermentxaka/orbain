let index = 0;

function prevslide(){
    if(index == 0){
        index = 4;
        document.getElementById("slide").src = `img/bombacarpeta/${index}.jpg`;
    }
    else{--index;
    document.getElementById("slide").src = `img/bombacarpeta/${index}.jpg`;
    }
}

function nextslide(){
    if(index == 4){
        index = 0;
        document.getElementById("slide").src = `img/bombacarpeta/${index}.jpg`; 
        
    }
    else{
        index++;
        document.getElementById("slide").src = `img/bombacarpeta/${index}.jpg`;
    }

}