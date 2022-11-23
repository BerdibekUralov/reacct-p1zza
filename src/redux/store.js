import { createStore } from "redux";

function storeBar() {
  console.log('Hello');
}

const store = createStore(storeBar)

export default store