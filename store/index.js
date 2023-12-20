// store/products.js

export const state = () => ({
  products: [],
  cartProducts:[]
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addToCart(state, product , totalPrice) {
    state.cartProducts = [...state.cartProducts, {product, totalPrice}]
  },
  // removeFromCart(state , {product}) {
  //   // console.log(state.cartProducts[0] ,{ product , totalPrice})
  //   const pros = state.cartProducts[0].product.product;
  //   state.cartProducts = pros?.filter(item => item.id !== product.id)
  //   // const productId = product.id;
  //   // console.log(pros === productId)
  // }
};

export const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=0&skip=0`);

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const products = await response.json();

      // Commit the mutation to set products in the state
      commit('setProducts', products.products);
    } catch (error) {
      // console.error('Error fetching products:', error.message);
      // Handle the error as needed (e.g., show an error message)
    }
  },
  addToCartAction({ commit } , {product , totalPrice}) {
    commit('addToCart', {product, totalPrice})
  },
  // removeFromCart({ commit }, { product}) {
  //   commit('removeFromCart', {product})
  //   // console.log({product , totalPrice})
  // }
};
