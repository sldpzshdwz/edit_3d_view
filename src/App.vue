<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="router"><router-link to="/">首页</router-link></li>
          <li class="router"><router-link to="/editor">编辑器</router-link></li>
          <li class="router"><router-link to="/help">帮助</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- 这里会显示当前路由对应的组件 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script setup lang="ts">
// 目前 App.vue 不需要额外逻辑
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

header {
  background-color: #282c34;
  padding: 10px;
}

header ul {
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 0;
  margin: 0;
}

header li {
  display: inline;
}

header a {
  color: white;
  text-decoration: none;
}

header a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

header li.router {
  z-index: 6;
}

main {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
</style>
