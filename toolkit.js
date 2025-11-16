import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");
//reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

//store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("inital state : ", store.getState());

//subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

//dispatch
store.dispatch(login());
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 3, qty: 50 }));
store.dispatch(addToCart({ id: 5, qty: 70 }));
