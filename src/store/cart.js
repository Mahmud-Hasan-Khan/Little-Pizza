import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const cart = state.cart;
      const productIndex = cart.findIndex((item) => item.name === product.name);

      if (productIndex !== -1) {
        // Product exists, increment quantity
        cart[productIndex].quantity += 1;
        return { cart: [...cart] };
      } else {
        // Product doesn't exist, add it
        return { cart: [...cart, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== product.name),
    })),
  incrementQuantity: (product) =>
    set((state) => {
      const cart = state.cart;
      const productIndex = cart.findIndex((item) => item.name === product.name);
      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      }
      return { cart: [...cart] };
    }),
  decrementQuantity: (product) =>
    set((state) => {
      const cart = state.cart;
      const productIndex = cart.findIndex((item) => item.name === product.name);
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          return { cart: cart.filter((item) => item.name !== product.name) };
        }
      }
      return { cart: [...cart] };
    }),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;

