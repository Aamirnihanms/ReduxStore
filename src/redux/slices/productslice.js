import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchallproducts = createAsyncThunk('products/fetchallproducts',async()=>{
  const result=  await axios.get("https://dummyjson.com/products")
//   console.log(result)
sessionStorage.setItem("allproducts",JSON.stringify(result.data.products))
  return result.data.products
})

const productslice = createSlice({
    name:'products',
    initialState:{
        allproducts :[],
        dummyallproducts:[],
        loading : false,
        error : ""
    },
    reducers : {
        // product search
        searchproduct:(state,actionfromheader)=>{
            state.allproducts=state.dummyallproducts.filter(item=>item.title.toLowerCase().includes(actionfromheader.payload))
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchallproducts.fulfilled,(state,apiresult)=>{
            state.allproducts = apiresult.payload
            state.dummyallproducts=apiresult.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchallproducts.pending,(state,apiresult)=>{
            state.allproducts = []
            state.dummyallproducts=[]
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchallproducts.rejected,(state,apiresult)=>{
            state.allproducts=[]
            state.dummyallproducts=[]
            state.loading = false
            state.error ="api called failed...please try after sometimes!!!"
        })
    }
})

export const {searchproduct} = productslice.actions
export default productslice.reducer
