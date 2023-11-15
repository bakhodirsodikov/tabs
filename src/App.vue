<template>
  <div class="container">
    <div class="tabs">
      <div class="tab" 
      v-for="(tab, idx) in tabs"
      :key="idx"
      @click="select(tab)"
      :class="{'activeTab' : selected === tab}"
      >{{ tab }}</div>
    </div>
    <div class="content" 
    :class="{'active-content' : activeTab === 'Посты'}">
      <div class="posts">
        <div class="post-title"
        v-if="filterUserId">
          <h3 class="post__user-name"
          v-for="user in filterUserId"
          :key="user.name">
            Autor: {{ user.name }}
          </h3>
          <button class="btn close-btn"
          @click="deleteFilter"
          >
            <span></span>
          </button>
        </div>
        <span v-for="(post, idx) in filteredPosts"
        :key="idx">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p> 
          <p class="autor"
          v-for="user in users"
          :key="user.id"
          ><span v-if="user.id == post.userId">
            <strong>Autor:  {{ user.name }}</strong>
          </span></p>
          <p>Comments: </p>
          <p class="comments"
          v-for="comment in comments"
          :key="comment.postId"
          >
          <span v-if="comment.postId == post.id">
            - {{ comment.body }}
          </span></p>
          <input class="let-comment" 
          placeholder="напишите комментарий"
          @keypress.enter="sendComment(post.id)"
          v-model="userComment"
          >
          <button class="btn send-comment"
          @click="sendComment(post.id)"
          
          >Оставить комментарий</button>
        </span>
      </div>
    </div>
    <div class="content" 
    :class="{'active-content' : activeTab === 'Пользователи'}">
      <div class="users">
        <span v-for="(user, idx) in users"
        :key="idx"> {{ user.name }}
        <button class="btn"
        @click="filterPost(user.id)">Посмотреть посты</button>
      </span>
      </div>
    </div>
  </div>
</template>

<script src="./main.js">
</script>
<style src="./app.css">
</style>
