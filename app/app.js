document.addEventListener("DOMContentLoaded", ()=>{
    const switcher = document.querySelector(".light-dark")
    const themeChanger = document.querySelector("[type='range']");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const card = document.querySelectorAll(".card");
    const smCard = document.querySelectorAll(".sm-cards");
    const toggleColor = document.querySelector("input");
    const toggleThumb = document.querySelector("input");
    const span = document.querySelectorAll(".span");



    themeChanger.addEventListener("change", ()=>{
        body.classList.toggle("body-theme");
        header.classList.toggle("top-bg-dark");
        span.forEach(color=>{
            color.classList.toggle("iconText");
            if(!color.classList.contains("black")){
                color.classList.add("black");
            }else{
                color.classList.remove("black");
            }
        })
        card.forEach(card => {
            card.classList.toggle("card-theme");
            if(!card.classList.contains('white')){
                card.classList.add('white');
                switcher.innerHTML = "Dark Mode";
                toggleColor.classList.add("toggleColor");
                toggleThumb.classList.add("toggleThumb");
            }else{
                card.classList.remove('white');
                switcher.innerHTML = "Light Mode";
                toggleColor.classList.remove("toggleColor");
                toggleThumb.classList.remove("toggleThumb");
            }
        })
        smCard.forEach(smCard => {
            smCard.classList.toggle("card-theme");
            if(!smCard.classList.contains('white')){
                smCard.classList.add('white');
            }else{
                smCard.classList.remove('white');
            }
        })
        
    })

});