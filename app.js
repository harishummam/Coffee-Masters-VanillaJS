import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link the Web Components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

// This creates a global object on the window; kind of a singleton that we can use in every file thats imported in app.js
// Since we converted app.js into a module, we needed a way to make the Store global else it would have been modular as well
window.app = {}; // We can use any other name besides app, we just need to assign an object to window object to make it global
app.store = Store; // Again, store is also a custom name
app.router = Router; //

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
