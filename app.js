const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const header = document.querySelector('.header.container');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor ="#111";
    }else{header.style.backgroundColor = "rgba(0, 0, 0, 0.34)"
    }
})