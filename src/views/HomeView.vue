<template>
    <div>
      <h1>首页</h1>
      <p>欢迎来到3D编辑项目</p>
      <p>本项目用于可视化编辑车辆AOI区域,提供json导入导出功能
      </p>
    </div>
    <div style="margin-top: 20px;">
      <button @click="goToEditor">进入 编辑器 页面</button>
      <button @click="goToAbout">进入 帮助 页面</button>
    </div>
  </template>
  
  <script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter();

    const goToEditor = () => {
      router.push('/editor');
    }
    const goToAbout = () => {
      router.push('/about');
    }

  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>