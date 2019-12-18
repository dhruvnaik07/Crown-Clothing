import ShopActionTypes from './shoptypes.js';

 export const updateCollections = (collectionsMap) => ({
 
  	type: ShopActionTypes.UPDATE_COLLECTIONS,
  	payload: collectionsMap
  });