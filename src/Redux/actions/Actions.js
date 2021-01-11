import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "../Types"


export const addtobasket = (payload) => {
    return {
        type: ADD_TO_BASKET,
        payload
    }
}

export const setuser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}

export const removebasket = (payload) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload
    }
}