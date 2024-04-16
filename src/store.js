import { setStorageItem, getStorageItem } from "../src/utilit.js";

let store = getStorageItem('store')

const setUpStore = (products) => {
 store = products.map((product) => {
  const {
   battery_capacity,
   brand,
   camera_setup, colors,
   description,
   display_size,
   id,
   image,
   model,
   price,
   processor,
   ram, ratings,
   release_year,
   resolution,
   storage } = product

  return {
   battery_capacity,
   brand,
   camera_setup, colors,
   description,
   display_size, id,
   image,
   model,
   price,
   processor,
   ram, ratings,
   release_year,
   resolution,
   storage
  }
 })
 setStorageItem('store', store)

}

const findProduct = (id) => {
 let products = store.find((product) => product.id === id)
 return products
}
export {store, setUpStore, findProduct}