import { setStorageItem, getStorageItem } from "../src/utilit.js";

let store = getStorageItem("store");

const setUpStore = (products) => {
 store = products.map((product) => {
  const {
   id,
   title,
   brand,
   price,
   description,
   rating,
   thumbnail,
   images,
  } = product;

  return {
   id,
   model: title,          // ✅ your UI expects "model"
   brand,
   price,
   description,
   ratings: rating,       // ✅ keep your naming if used elsewhere
   image: thumbnail,      // ✅ your old code expects "image"
   images,                // optional
  };
 });

 setStorageItem("store", store);
};

const findProduct = (id) => store.find((p) => p.id === id);

export { store, setUpStore, findProduct };