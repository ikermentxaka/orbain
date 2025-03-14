let index = 0;

function prevslide(){
    if(index == 0){
        index = 2;
        document.getElementById("slide").src = `img/prob/${index}.png`;
    }
    else{--index;
    document.getElementById("slide").src = `img/prob/${index}.png`;
    }
}

function nextslide(){
    if(index == 2){
        index = 0;
        document.getElementById("slide").src = `img/prob/${index}.png`; 
        
    }
    else{
        index++;
        document.getElementById("slide").src = `img/prob/${index}.png`;
    }

}