import { getProductById } from "./Menu.js";
export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id == id
  );
  if (results.length == 1) {
    app.store.cart = app.store.cart.map((p) =>
      p.product.id == id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    // To trigger the proxy change reaction, create a new array with previous and new data.
    // Pushing data to existing array will not trigger the proxy.
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter((p) => p.product.id != id);
}
