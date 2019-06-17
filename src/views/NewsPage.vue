<template lang="pug">
  #news_page
    Breadcrumbs
    ArticleListing(:limit="2" :paginate="true")

</template>
<script>
  import Breadcrumbs from '../components/Breadcrumbs.vue'
  import ArticleListing from '../components/ArticleListing.vue'
  export default{
    components: {
      ArticleListing,
      Breadcrumbs
    }
  }
</script>