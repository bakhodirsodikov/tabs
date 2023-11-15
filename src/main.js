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
      filterUserId: '',
      filteredPosts: [],
      comments: [],
      userComment: '',
      page: 0,
    }
  },
  created(){  
    this.getUsers(),
    this.getPosts(),
    this.getComments()
    
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
        // .then(users => console.log(users))  
      },

      async getPosts(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json)
        .then(json => this.filteredPosts = json) 
        // .then(filteredPosts => console.log(filteredPosts))         
      },

      async getComments(){
        await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => this.comments = json)
        // .then(comments => console.log(comments))
      },

      getUserName(id){
        const userName = this.users.filter(e=>{
          return e.id == id
          
        })
        this.filterUserId = userName
      },

      filterPost(idx){
          const filter = this.posts.filter(element => {
            return element.userId == idx

        });
        this.filteredPosts = filter
        this.selected = this.tabs[0]
        this.activeTab = 'Посты'
        this.getUserName(idx)
        console.log(this.posts);
    },
    deleteFilter(){
      this.filteredPosts = this.posts
      this.filterUserId = ''
    },
    sendComment(id){
      if(this.userComment){
        const newComment = 
      {
        postId: id,
        body: this.userComment
      }
      this.comments.push(newComment);
      this.userComment = ''
      }
    },
  } 
}
createApp(App).mount('#app')
