// elemento menu'
const hamburgerMenu = document.querySelector('.hamburger-menu'); 
// console.log(hamburgerMenu);

// elemento icona hamburger
const hamburgerIcon = document.querySelector('.fas.fa-bars');
// console.log(hamburgerIcon);

// elemento chiusura hamburger
const hamburgerClose = document.querySelector('.close')
// console.log(hamburgerClose);

hamburgerIcon.addEventListener ("click",   // evento di click su icona hamburger
    function() {
        hamburgerMenu.style.display="block";   // add funzione block
    }
);

hamburgerClose.addEventListener ("click",   // evento click su icona di chiusura
    function() {
        hamburgerMenu.style.display="none";   // add proprieta none
    }
);