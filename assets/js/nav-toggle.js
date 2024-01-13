
let toggleMenu = () => {
    let opnBtn = document.querySelector('.open-menu');
    let closeBtn = document.querySelector('.close-menu');
    
    let aside = document.querySelector('.header__sidebar');
    
    opnBtn.addEventListener('click', () => {
        aside.classList.add('show');
        aside.setAttribute('aria-expanded', 'true');
    })
    
    closeBtn.addEventListener('click', () => {
        aside.classList.remove('show')
        aside.setAttribute('aria-expanded', 'false');
    })

    document.addEventListener('mouseup', e => {
        if(!e.target.closest('.header__sidebar')){
            aside.classList.remove('show');
            aside.setAttribute('aria-expanded', 'false');
        }
    })



    let scrollUp = () =>{
        let header = document.getElementById('header');

        window.scrollY >= 200 ? header.classList.add('slide-up') : header.classList.remove('slide-up');
    }
    window.addEventListener('scroll', scrollUp);
}

export default toggleMenu;

