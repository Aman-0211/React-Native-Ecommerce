import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, SUB_SHIPPING} from '../../constant'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//subtract shiping action
export const addShiping=(id)=>{
    return{
        type: ADD_SHIPPING,
        id
    }
}
//add sub action
export const subtractShiping=(id)=>{
    return{
        type: SUB_SHIPPING,
        id
    }
}