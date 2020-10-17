import Item1 from '../../../assets/images/Aashirvaad.png'
import Item2 from '../../../assets/images/atta-whole.jpeg'
import Item3 from '../../../assets/images/garam.jpeg'
import Item4 from '../../../assets/images/maida.jpeg'
import Item5 from '../../../assets/images/rice.jpeg'
import Item6 from '../../../assets/images/wholegrain.jpeg'


import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
  } from '../../constant';
  
  const initialState = {
    items: [
        {id:1,title:'ATTA - WHOLE WHEAT 1KG ', production: "AASHIRVAD", price:110, quantity:"1PC",img:Item1},
        {id:2,title:'MAIDA', production: "BHAGYALAKSHMI", price:80,quantity:"500G",img: Item2},
        {id:3,title:'GARAM FLOUR', production: "BHAGYALAKSHMI",price:120,quantity:"500G",img: Item3},
        {id:4,title:'RICE FLOUR', production: "BHAGYALAKSHMI", price:260,quantity:"500G",img:Item4},
        {id:5,title:'ATTA-WHOLE WHEAT', production: "BHAGYALAKSHMI", price:160,quantity:"500G",img: Item5},
        {id:6,title:'MULTI-GRAIN WHEAT', production: "AASHIRVAD",price:90,quantity:"500G",img: Item6}
    ],
    addedItems:[],
    total: 0

  };

  function addTOCart(state){
    let addedItem = state.items.find(item=> item.id === action.id)
    //check if the action id exists in the addedItems
    let existed_item= state.addedItems.find(item=> action.id === item.id)
    if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }



    function removeItem(){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }


    function addQuantity(state){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }

    }


    function subQuantity(state){
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }

  
  export default function reducer(state = initialState, action){
    switch (action.type) {

        case ADD_TO_CART:
            return addTOCart(state)
        
        case REMOVE_ITEM:
            return removeItem(state)
        
        case ADD_QUANTITY:
            return addQuantity(state)

        case SUB_QUANTITY:
            return subQuantity(state)
     
        default:
            return state;
    }
  };