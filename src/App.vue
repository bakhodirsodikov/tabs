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
        <span v-for="(post, idx) in posts"
        :key="idx">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p> 
        </span>
      </div>
    </div>
    <div class="content" 
    :class="{'active-content' : activeTab === 'Пользователи'}">
      <div class="users">
        <span v-for="(user, idx) in users"
        :key="idx"> {{ user.name }}
        <button class="btn"
        @click="filteredPost(idx + 1 )">Посмотреть посты</button>
      </span>
      </div>
    </div>
  </div>
</template>

<script src="./main.js">
</script>
<style src="./app.css">
</style>
