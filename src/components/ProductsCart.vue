<template lang="pug">
  #card
    input(v-model="name")
    input(v-model="surname")
    |{{fullname}}
    |{{cart_items.length}}
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data: function(){
      return {
        name: '',
        surname: ''
      }
    },
    computed: {
      fullname: function(){
        return this.name+' '+this.surname
      },
      ...mapState([
        'cart_items'
      ])
    }
  }
</script>