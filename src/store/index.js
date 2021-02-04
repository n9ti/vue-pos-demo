import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    addToCart(state, newProduct) {
      let index = state.cart.findIndex(product => product.id === newProduct.id);

      if (index >= 0) {
        state.cart[index].amount++;
      } else {
        state.cart.push({ ...newProduct, amount: 1 });
      }
    },
    setProduct(state, products) {
      state.products = products;
    }
  },
  getters: {
    net(state) {
      return state.cart.reduce(
        (sumPrice, product) => sumPrice + product.price * product.amount,
        0
      );
    }
  },
  actions: {
    getProduct({ commit }) {
      let products = [
        {
          id: "001",
          name: "iPad Pro",
          price: 30900,
          storage: 32,
          type: "iPad",
          size: "12.9"
        },
        {
          id: "002",
          name: "iPad Pro",
          price: 34900,
          storage: 128,
          type: "iPad",
          size: "12.9"
        },
        {
          id: "003",
          name: "iPad Pro",
          price: 38900,
          storage: 256,
          type: "iPad",
          size: "12.9"
        },
        {
          id: "004",
          name: "iPad Pro",
          price: 22900,
          storage: 32,
          type: "iPad",
          size: "9.7"
        },
        {
          id: "005",
          name: "iPad Pro",
          price: 26900,
          storage: 128,
          type: "iPad",
          size: "9.7"
        },
        {
          id: "006",
          name: "iPad Pro",
          price: 30900,
          storage: 256,
          type: "iPad",
          size: "9.7"
        },
        {
          id: "007",
          name: "iPad Air 2",
          price: 14400,
          storage: 32,
          type: "iPad",
          size: "9.7"
        },
        {
          id: "008",
          name: "iPad Air 2",
          price: 18400,
          storage: 128,
          type: "iPad",
          size: "9.7"
        },
        {
          id: "009",
          name: "iPad mini 4",
          price: 14400,
          storage: 32,
          type: "iPad",
          size: "7.9"
        },
        {
          id: "010",
          name: "iPad mini 4",
          price: 18400,
          storage: 128,
          type: "iPad",
          size: "7.9"
        },
        {
          id: "011",
          name: "iphone7",
          price: 26000,
          storage: 32,
          type: "iPhone",
          size: "4.7"
        },
        {
          id: "012",
          name: "iphone7",
          price: 55000,
          storage: 128,
          type: "iPhone",
          size: "4.7"
        },
        {
          id: "013",
          name: "iphone7Plus",
          price: 49000,
          storage: 32,
          type: "iPhone",
          size: "5.5"
        },
        {
          id: "014",
          name: "iphone7Plus",
          price: 59000,
          storage: 128,
          type: "iPhone",
          size: "5.5"
        }
      ];
      commit("setProduct", products);
    }
  },
  modules: {}
});
