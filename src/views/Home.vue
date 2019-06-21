<template lang="pug">
  <div class="home">
    .wrapper
      .row
        .column-laptop-3-4
          ProductsListing
    ArticleListing
    
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleListing from '../components/ArticleListing.vue'
import ProductsListing from '../components/ProductsListing.vue'
export default {
  name: 'home',
  components: {
    ArticleListing,
    ProductsListing
  }
}
</script>
