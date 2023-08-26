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
})

