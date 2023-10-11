import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allItems: [],
    items: [],
    totalAmount: 0,
  },

  reducers: {
    addItems: (state, action) => {
      if (
        !state.items.find(
          (item) => item.card.info.id === action.payload.card.info.id
        )
      ) {
        state.items.push(action.payload);
      }
      state.allItems.push(action.payload);
    },

    removeItems: (state, action) => {
      for (let idx = state.allItems.length - 1; idx >= 0 ; idx--) {
        if (state.allItems[idx].card.info.id === action.payload.card.info.id) {
            state.allItems.splice(idx, 1);
        }
      }
      const index = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      state.items.splice(index, 1);
    },

    clearCart: (state) => {
      state.items.length = 0;
      state.allItems.length = 0;
    },

    setTotalAmount: (state) => {
      state.totalAmount = state.allItems.reduce((sum, item) => {
        sum += item.card.info.price / 100;
        return sum;
      }, 0);
    },
    decrementCounter:(state , action)=>{     
        const index = state.allItems.findIndex(
          (item) => item.card.info.id === action.payload.card.info.id
        );
        state.allItems.splice(index, 1);      
    }
  },
});

export const { addItems, removeItems, clearCart, setTotalAmount ,decrementCounter} =
  cartSlice.actions;

export default cartSlice.reducer;
