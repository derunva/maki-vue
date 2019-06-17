<template lang="pug">
  #breadcrumbs
    |breadcrumbs
    ul
      li(v-for="item in $router.options.routes")
        router-link(:to="item.path") {{item.name}}
</template>
<script>
  export default{
    data: function(){
      return {
        current : ''
      }
    },
    mounted(){
      console.log(this.$router)
      this.current = this.$router.history.current.name
    }
  }
</script>