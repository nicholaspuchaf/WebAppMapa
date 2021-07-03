/*!
* Start Bootstrap - Freelancer v7.0.2 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//


const navbarResponsive = document.querySelector('#navbarResponsive');
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener('click', function(e){
    e.preventDefault();
    
    if(navbarResponsive.style.display ==="block"){
        navbarResponsive.style.display = 'none';
    }
    else{
        navbarResponsive.style.display = 'block';
    }  

});