
let displayYear = () =>{
    let year = document.querySelector('.year');
    let date = new Date().getFullYear();

    year.textContent = date;
}

export default displayYear;