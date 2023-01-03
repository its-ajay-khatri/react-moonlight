let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_back = document.getElementById('mountain_back');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountain_front = document.getElementById('mountain_front');


window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    document.getElementById('stars').style.left = value * 0.25 + "px";
    document.getElementById('moon').style.top = value * 1.05 + "px";
    document.getElementById('mountain_back').style.top = value * 0.5 + "px";
    document.getElementById('mountain_front').style.top = value * 0 + "px";
    document.getElementById('text').style.marginRight = value * 4 + "px";
    document.getElementById('text').style.marginTop = value * 1.2 + "px";
    document.getElementById('btn').style.marginTop = value * 1.5 + "px";
    document.querySelector.style.top = value * 0.5 + "px";
})
