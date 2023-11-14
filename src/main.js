import { createApp } from 'vue'
import App from './App.vue'

export default {
  data(){
    return{
      tabs: ['Посты', 'Пользователи'],
      selected: '',
      post: {name: 'посты'},
      user: {name: 'пользователь'},
      activeTab: '',
      users: [],
      posts: [],
      filteredPosts: [],

    }
  },
  mounted(){
    this.getUsers(),
    this.getPosts()
  },

  methods:{
    select(tab){
      this.selected = tab;
      this.activeTab = tab;
    },

    async getUsers(){
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.users = json)
      },

      async getPosts(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json)        
      },

      filteredPost(idx){
        console.log(this.posts);
          const filter = this.posts.filter(element => {
            element.userId == idx
            console.log();
        });
      console.log(filter);

    }
  } 
}
createApp(App).mount('#app')
