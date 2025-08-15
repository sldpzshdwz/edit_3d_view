<template>
    <button @click="triggerFileSelect">导入 AOI JSON</button>
    <input
      type="file"
      ref="fileInput"
      accept="application/json"
      style="display: none"
      @change="handleFileChange"
    />
  </template>
  
<script setup lang="ts">
  import { ref } from "vue";
  import { AOI, AOIConfig } from "@/import/AOIConfig";
  
  const emit = defineEmits<{
    (e: "imported", config: AOIConfig): void;
  }>();
  
  const fileInput = ref<HTMLInputElement | null>(null);
  
  const triggerFileSelect = () => {
    fileInput.value?.click();
  };
  
  const handleFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;
  
    const file = target.files[0];
    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);
      const config = new AOIConfig(jsonData);
      emit("imported", config);
    } catch (err) {
      console.error("JSON 解析错误：", err);
    } finally {
      if (fileInput.value) fileInput.value.value = ""; // 允许重复选择同一个文件
    }
  };
  </script>
  