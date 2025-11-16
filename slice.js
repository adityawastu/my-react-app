import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    addToLogin(state, action) {
      state.status = true;
    },
  },
});

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
});
console.log("inital state : ", store.getState());

//subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(loginSlice.actions.addToLogin());
