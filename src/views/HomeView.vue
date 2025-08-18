<template>
    <div>
      <h1>首页</h1>
      <p>欢迎来到舱内AOI 3D编辑项目</p>
      <p>本项目用于可视化编辑车辆AOI区域,提供json导入导出、顶点编辑功能</p>
      <p>项目基于Vue3+ElementPlus+TS+Threejs实现</p>
      <p>有任何问题,请联系李泽刚,邮箱:lizegang@minieye.cc</p>
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