import { generateSinglePricing } from './generateSinglePricing.js'


const button = document.querySelector('.choose');

button.addEventListener('click', () => {
    button.classList.toggle('active');
})


function renderPricing(data) {


    const pricingLenght = data.pricing.length;
    const pricingDOM = document.querySelectorAll(data.selector);

    for (let i = 0; i < pricingLenght; i++) {
        const priceBlock = data.pricing[i];
        pricingDOM[i].innerHTML = generateSinglePricing(priceBlock);
    }
    console.log(pricingDOM[0]);
}
export { renderPricing }