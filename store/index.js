// store/products.js

export const state = () => ({
  products: [],
  cartProducts:[]
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addToCart(state, product) {
    state.cartProducts = [...state.cartProducts, {product}]
    // console.log(state.cartProducts)
    // state.cartProducts = state.cartProducts.push({...product.product})
  },
  removeFromCart(state, { product }) {
    // console.log(product)
    state.cartProducts = state.cartProducts.filter(item => item.product.product.id !== product.id)
  }
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
  addToCartAction({ commit } , {product }) {
    commit('addToCart', { product })
    // console.log(product)
    // console.log(this.cartProducts)
  },
  removeFromCart({ commit }, { product}) {
    commit('removeFromCart', {product})
    // console.log({product })
  }
};
