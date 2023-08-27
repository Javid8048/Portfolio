// const getBgColor = window.getComputedStyle(document.documentElement)
// .getPropertyValue('--background-even');
// console.log(getBgColor,); //*to see the color in console

document.getElementById("darkMode").addEventListener("click", ()=> {
    document.documentElement.style.setProperty("--background-odd", "#222");
    document.documentElement.style.setProperty("--background-even", "#111");
});

document.querySelector("#lightMode").addEventListener('click', ()=> {
    document.documentElement.style.setProperty("--background-odd", "#250");
    document.documentElement.style.setProperty("--background-even", "#254");
});

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onload = () => 

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top>=offset && top<offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}