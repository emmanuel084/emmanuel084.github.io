
/*---------Modo Oscuro----------*/

var darkmode = document.getElementById("darkmode");

darkmode.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        darkmode.src = "darkmode/sun.png";
    }else{
        darkmode.src = "darkmode/moon.png";
    }
}




/*---------Botón Subir----------*/

const scrollBtn = document.querySelector (".btn-scroll-top"); 

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
} )
