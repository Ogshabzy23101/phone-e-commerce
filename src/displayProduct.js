// global import

import { formatPrice } from "../src/utilit.js";
import { addToCart } from "./cart/setupCart.js";


const display = (items, section) => {
  section.innerHTML = items.map((item) => {
    const { model, price, id } = item;
    return `<div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="cover" >
              <h1>${model}</h1>
               <img class="each-phone-image" src="./images/bg/${model.replaceAll(' ', '-')}.png" alt="">
              <span class="price" style="color: #f30c23">${formatPrice(price)}</span>
              <div class="card-back">
                <a href="#" data-id="${id}" 
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight" class="add-cart">Add to cart</a>

                <a href="singlephone.html?id=${id}">View detail</a>
              </div>
            </div>
          </div>
        </div>`
  }).join('')
  section.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
      addToCart(parseInt(id))
    }
  })

}

export { display }