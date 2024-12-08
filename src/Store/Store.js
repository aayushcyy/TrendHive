import { create } from "zustand";

const useProducts = create((set) => ({
  products: [],
  cart: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
    }
  },

  addToCart: ({ title, url, price }) => {
    set((state) => {
      const updatedCart = [
        ...state.cart,
        { title, url, price, id: Date.now() },
      ];
      console.log("Cart Updated:", updatedCart);
      return { cart: updatedCart };
    });
  },

  removeFromCart: (url) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.url !== url),
    }));
  },
}));

export default useProducts;
