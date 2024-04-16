import { getElement, allMobileUrl, singleMobileUrl } from '../src/utilit.js';
 
const fetchProduct =async () => {
 const response = await fetch(allMobileUrl).catch((err) => console.log(err));
 if (response) {
  return response.json()
 }
 return response
}

export {fetchProduct}