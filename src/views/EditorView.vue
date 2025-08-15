<template>
  <div class="editor-page">
    <EditorComponent />
  </div>
</template>

<script setup lang="ts">
import EditorComponent from '../components/EditorComponent.vue';
</script>

<style scoped>
.editor-page {
  width: 100vw;
  height: 100vh; /* 占满整个页面高度 */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>