<template lang="pug">
  #breadcrumbs
    |breadcrumbs
    ul
      li(v-for="item, index in routes")
        router-link(to="/" v-if="index == 0") Головна
        router-link(
          :to="'/'+calcutePath(index)" 
          v-if="index != 0 && routes.length-1 != index"
        ) {{item}} 
      li
        span(v-if="end_title") {{end_title}}
</template>
<script>
  export default{
    props: ['end_title'],
    data: function(){
      return {
        current : '',
        routes : []
        
      }
    },
    tmp_path: [],
    methods: {
      calcutePath(index){
        var path = []
        for(var i = 1; i <= index; i++){
          path.push( this.routes[i])
        }
        return path.join('/')
      }
    },
    mounted(){
      console.log(this.$router)
      this.current = this.$router.history.current.name
      this.routes = this.$router.history.current.path.split('/')
    }
  }
</script>