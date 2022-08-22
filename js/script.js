function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    const banner = document.querySelector('.banner-title');
    const botao = document.querySelector('.btn-green');
    const bg = document.querySelector('.col-cafe-color');
    const cta = document.querySelector('.cta');
    const coffe = document.querySelector('.coffe-text');
    const btn = document.querySelector('.btn-color');
    const maps = document.querySelector('.maps');
    circle.style.background = color;
    banner.style.color = color;
    bg.style.background = color;
    cta.style.background = color;
    coffe.style.background = color;
    btn.style.background = color;
    botao.style.color = color;
    maps.style.background = color;
}