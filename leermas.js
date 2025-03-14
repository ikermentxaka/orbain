let txtbtn = document.getElementById("txtbtn");
let hideText = document.getElementById('hideText');

txtbtn.addEventListener('click', toggleText);
function toggleText(){
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')){
        txtbtn.innerHTML = 'Mucho texto';
    }
    else{
        txtbtn.innerHTML = 'Leer mas...'
    }
}