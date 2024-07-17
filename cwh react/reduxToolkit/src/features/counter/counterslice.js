import { createSlice } from "@reduxjs/toolkit";

const initialState= {
   value :0,
   power:2,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{

        increment: (state)=>{
        
                state.value+=1;

            
        },

        decrement: (state)=>{
            state.value-=1;
        },

        incrementByAmount: (state,action)=>{
            
          state.value+= action.payload
        },

        multiply:(state)=>{
            state.value*=2;
        },

        incrementpower:(state)=>{
           state.power+=1;
        }
    }
})

export const {increment,decrement,incrementByAmount,multiply,incrementpower} = counterSlice.actions

export default counterSlice.reducer;