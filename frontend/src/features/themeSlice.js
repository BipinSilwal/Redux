
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

        color:'black'


};

export const themeSlice = createSlice({

        name:"theme",
        initialState,
        reducers:{

                chagneColor:(state, action)=>{

                        state.color = action.payload

                }

        }


});


export const { chagneColor } =  themeSlice.actions;

export default themeSlice.reducer;