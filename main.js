let carousel = document.getElementById('carousel')
carousel.style.marginLeft = ''
function nuxt(){
    carousel.style.marginLeft = '160px'
}
function prew(){
    carousel.style.marginLeft = '-160px'
}

let carousel = document.getElementById('carousel') // РѕСЃР»РµРґРёР»Рё СЌР»РµРјРµРЅС‚ СЃ id "carousel"
let currentSlide = 0 // РєР°РєРѕР№ СЃР»Р°Р№Рґ РІ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ
const slideWidth = 176 // С€РёСЂРёРЅР° РѕРґРЅРѕРіРѕ СЃР»Р°Р№РґР° 

function nuxt() {
    currentSlide = (currentSlide + 1) % carousel.children.length
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`
}

function prew() {
    currentSlide = (currentSlide - 1 + carousel.children.length) % carousel.children.length
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`
}
