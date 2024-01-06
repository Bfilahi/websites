
let toggleMenu = () => {
    let opnBtn = document.querySelector('.open-menu');
    let closeBtn = document.querySelector('.close-menu');
    
    let aside = document.querySelector('.header__sticky-navbar');
    
    opnBtn.addEventListener('click', () => {
        aside.classList.add('show');
    })
    
    closeBtn.addEventListener('click', () => {
        aside.classList.remove('show')
    })

    document.addEventListener('mouseup', e => {
        if(!e.target.closest('.header__sticky-navbar'))
            aside.classList.remove('show');
    })
}

export default toggleMenu;

