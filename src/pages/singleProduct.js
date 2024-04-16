import "../cart/setupCart.js";


import { addToCart } from "../cart/setupCart.js";
import { singleMobileUrl, getElement, formatPrice } from "../utilit.js";


const descriptionDOM = getElement('.phone-desc-paragraph')
const titleDOM = getElement('.phone-title-head')
const modelDOM = getElement('.phone-title-head2')
const yearDOM = getElement('.phone-title-year')
const priceDOM = getElement('.price')
const displayDOM = getElement('.phone-display')
const processorDOM = getElement('.phone-processor')
const batteryDOM = getElement('.phone-ba3')
const ramDOM = getElement('.phone-ram')
const storageDOM = getElement('.phone-storage')
const resolutionDOM = getElement('.phone-resolution')
const colorDOM = getElement('.variant')
const CenterDOM = getElement('.pro-container')
const CartBtn = getElement('.add-cart')
const image = getElement('.photo-main-image')






let productId;

window.addEventListener('DOMContentLoaded', async () => {
 const urlsearch = new URLSearchParams(window.location.search)
 const urlId = urlsearch.get('id')
 try {
  const response = await fetch(`${singleMobileUrl}${urlId}`)
  if (response.status >= 200 && response.status <= 299) {
   const products = await response.json()
   const { battery_capacity, brand,
    camera_setup, colors, description,
    display_size,
    model,
    price
    ,
    processor,
    ram,
    release_year,
    resolution, storage, id
   } = products
   productId = id
   descriptionDOM.innerHTML = `${description}`
   titleDOM.textContent = `${brand}`
   modelDOM.textContent = `${model}`
   yearDOM.textContent = `Year: ${release_year}`
   priceDOM.textContent = `${formatPrice(price)}`
   displayDOM.innerHTML = `<span>Display size:</span> ${display_size}`
   processorDOM.innerHTML = `<span>Processor :</span> ${processor}`
   batteryDOM.innerHTML = `<span>Battery capacity :</span>${battery_capacity}`
   ramDOM.innerHTML = `<span>Ram size:</span> ${ram}`
   storageDOM.innerHTML = `<span>Storage size:</span> ${storage}`
     resolutionDOM.innerHTML = `<span>resolution:</span> ${resolution}`
     image.src = `./images/bg/${model.replaceAll(' ', '-')}.png`

   colors.forEach((color) => {
    const list = document.createElement('li');
    list.classList.add('product-color');
    list.textContent = color
    colorDOM.appendChild(list);
   });





  } else {
   console.log(response.status, response.statusText);
   CenterDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div> 
     `;
  }







 } catch (error) {
  console.log(error);
 }

})

CartBtn.addEventListener('click', function () {
 addToCart(productId);
});
