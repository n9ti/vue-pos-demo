<template>
  <div class="home">
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id">
      {{ product.name }} {{ product.price }}
      <button @click="addToCart(product)">Add to cart</button>
    </div>
    <br />
    <hr />
    <br />
    <h1>Cart</h1>
    <div v-for="product in cart" :key="product.id">
      {{ product.name }} {{ product.price }} x{{ product.amount }}
      <button @click="addToCart(product)">Add to cart</button>
    </div>
    <h1>รวม {{ net }}</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.getProduct();
  },
  data() {
    return {
      v: 0
    };
  },
  computed: {
    ...mapState(["products", "cart"]),
    ...mapGetters(["net"])
  },
  methods: {
    ...mapMutations(["addToCart"]),
    ...mapActions(["getProduct"])
  }
};
</script>
