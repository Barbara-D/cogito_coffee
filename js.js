const menu= document.querySelector('#mobile-menu');
const menuLinks= document.querySelector('.navbar__menu');
const navLogo=document.querySelector('#navbar_logo');




const mobileMenu = () =>
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home_page');
    const productsMenu = document.querySelector('#products_page');
    const aboutMenu = document.querySelector('#about_page');
    const teamMenu = document.querySelector('#team_page');
    const contactMenu = document.querySelector('#contact_page');

    let scrollPos= window.scrollY;
    // console.log(scrollPos);
    // console.log(5);

    //add highlight class to menu items

    if (window.innerWidth > 960 && scrollPos< 650)
    {
        homeMenu.classList.add('highlight');
        productsMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 960 && scrollPos< 1400)
    {
        productsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }   
    else if (window.innerWidth > 960 && scrollPos< 2600)
    {
        aboutMenu.classList.add('highlight');
        productsMenu.classList.remove('highlight');
        teamMenu.classList.remove('highlight');
        return;
    }    
    else if (window.innerWidth > 960 && scrollPos > 2600)
    {
        teamMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 700) || elem) {
        elem.classList.remove('highlight');
      }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);
  