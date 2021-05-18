//CSS Transitions upon loading
document.body.onload=function(){
    let name = document.querySelector('h1');
    name.style = "transition:1.5s ease-out; transform: translateY(3vw); opacity:100";

    let caption = document.querySelector('h2');
    caption.style = "transition:1.5s ease-out; transform: translateY(-1.5vw); opacity:100";

    let ribbon = document.querySelector('.links-ribbon');
    ribbon.style = "transition: 1.75s; transform: translateX(0);"
};


