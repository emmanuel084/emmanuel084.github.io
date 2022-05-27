const scrollBtn = document.querySelector (".btn-scroll-top"); 

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
} )