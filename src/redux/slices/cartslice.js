import { createSlice } from "@reduxjs/toolkit";
import { PiChartPieSlice } from "react-icons/pi";

const cartSlice = createSlice({
    name:"cartitems",
    initialState:[],
    reducers:{
        // add to cart
        addtocart:(state,actionfromview)=>{
            const existingproduct = state.find(item=>item.id===actionfromview.payload.id)
            if(existingproduct){
                const remainingproduct = state.filter(item=>item.id!=existingproduct.id)
                existingproduct.quantity++
                existingproduct.totalprice = existingproduct.quantity*existingproduct.price
                state =[...remainingproduct,existingproduct]
            }else{
                state.push({...actionfromview.payload,quantity:1,totalprice:actionfromview.payload.price})
            }
        },
        // remove single item 
        removecartitem:(state,actionfromcart)=>{
            return state.filter(item=>item.id!=actionfromcart.payload)
        },
        //increment quantity
        incquantity:(state,actionfromcart)=>{
            const existingproduct= state?.find(item=>item.id===actionfromcart.payload)
            existingproduct.quantity++
            existingproduct.totalprice=existingproduct.quantity*existingproduct.price
            const remainingproduct=state.filter(item=>item.id!=existingproduct.id)
            state=[...remainingproduct,existingproduct]
        },
        // decrement quantity
        decquantity:(state,actionfromcart)=>{
            const existingproduct= state?.find(item=>item.id===actionfromcart.payload)
            existingproduct.quantity--
            existingproduct.totalprice=existingproduct.quantity*existingproduct.price
            const remainingproduct=state.filter(item=>item.id!=existingproduct.id)
            state=[...remainingproduct,existingproduct]
        
    },
    // empty cart
    emptycart:(state)=>{
        return state=[]
    }
   }
})


export const {addtocart,removecartitem,incquantity,decquantity,emptycart} =  cartSlice.actions
export default cartSlice.reducer