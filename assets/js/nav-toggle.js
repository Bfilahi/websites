
let toggleMenu = () => {
    let opnBtn = document.querySelector('.open-menu');
    let closeBtn = document.querySelector('.close-menu');
    
    let aside = document.querySelector('.header__sidebar');
    
    opnBtn.addEventListener('click', () => {
        aside.classList.add('show');
    })
    
    closeBtn.addEventListener('click', () => {
        aside.classList.remove('show')
    })

    document.addEventListener('mouseup', e => {
        if(!e.target.closest('.header__sidebar'))
            aside.classList.remove('show');
    })
}

export default toggleMenu;

