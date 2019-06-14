<template lang="pug">
  .wrapper
    .row
      .column-phablet-1-2.column-laptop-1-3.m-b-30(v-for="item in news")
        Article(:article="item")
    ul.pagination.m-b-90(v-if="paginate")
      each item in '1234'
        li
          if(item==3)
            span.active=item
          else
            a(href="#")=item

    |{{limit}} {{paginate}}
</template>
<script>
import axios from 'axios'
import Article from './Article.vue'
export default{
  props: ['limit', 'paginate'],
  components: {
    Article
  },
  data: function(){
    return {
      news : [
        {
          text: 'Happy day ',
          date: '23.23.23'
        },
        {
          text: 'Happy day 1',
          date: '23.23.21'
        }
      ]
    }
  },
  mounted(){
    var path = 'http://localhost:4000/articles'
    var params = `limit=${this.limit}`
    if(this.limit){
      path = [path, params].join('?')
    }
    axios.get(path)
    .then((data) => {
      console.log(data)
      this.news = data.data.docs
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}
  
</script>