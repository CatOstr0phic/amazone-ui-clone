export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>     //getSavedItem //saved 
  basket?.reduce((amount, item) => item.price + amount, 0); //saved 



function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
       
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      
      if (index >= 0){
        newBasket.splice(index, 1);
      } else {
        console.warn (
          `Can't resolve product (id: ${action.id}) as its not in basket`
        )
      }
    return {
      ...state,
      basket: newBasket,
    }

    

    default:
      return state;
  }
}
export default reducer;

//4.19npm~~ 