import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "../Types"

const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return { ...state, basket: [...state.basket, action.payload] }
        case SET_USER:
            return { ...state, user: action.payload }
        case REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload
            )
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)

            }
            return {
                ...state,
                basket: newBasket
            }
        default: return state
    }
}

export default appReducer
