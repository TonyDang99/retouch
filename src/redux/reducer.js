import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addRetouchReducer = createSlice({
    name:"retouchs",
    initialState,
    reducers:{
        
        addRetouchs: (state, action) => {
            state.push(action.payload);
            return state;
        },

        removeRetouchs: (state, action) =>{
            if(window.confirm("Are you want to delete this?")) {
                return state.filter((item) => item.id !== action.payload);
            }
        },

        updateRetouchs: (state, action) => {
            return state.map((retouch) => {
              if (retouch.id === action.payload.id) {
                return {
                  ...retouch,
                  item: action.payload.item,
                };
              }
              return retouch;
            });
          },
         //completed
        completeRetouchs: (state, action) => {
        return state.map((retouch) => {
          if (retouch.id === action.payload) {
            return {
              ...retouch,
              completed: true,
            };
          }
          return retouch;
        });
      },
    },
});

export const {
    addRetouchs,
    removeRetouchs,
    updateRetouchs,
    completeRetouchs,
  } = addRetouchReducer.actions;
  export const reducer = addRetouchReducer.reducer;