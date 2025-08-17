<template>
    <div>
      <!-- 状态文本框 -->
      <el-alert
        :title="statusText"
        type="info"
        :closable="false"
      />
      
      <!-- 测试按钮
      <el-button @click="setStatus('正在加载...')">设置加载状态</el-button>
      <el-button @click="setStatus('操作成功')">设置成功状态</el-button>
      <el-button @click="setStatus('出现错误')">设置错误状态</el-button> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { EditMode_c } from '@/import/AOIConfig';
  import { ref, watch } from 'vue'
  import { defineProps } from 'vue'
  import * as THREE from 'three';
  let statusText=ref('编辑模式');
  interface Props {
    status: EditMode_c;
    From:THREE.Mesh|null;
  }
  const props = defineProps<Props>()
  function updateStatusText(){
    console.log('运行')
    switch(props.status){
        case EditMode_c.XiFu:
        statusText.value='吸附顶点模式';
        if(props.From){
            statusText.value+='  当前选中的第一个对象：'+props.From.name;
        }
        break;
        case EditMode_c.Addvertices:
        statusText.value='添加顶点模式';
        if(props.From){
            statusText.value+='  当前选中的第一个对象：'+props.From.name;
        }
        break;
        case EditMode_c.None:
        statusText.value='编辑模式';
        break;
    }    
  }
  watch([() => props.status, () => props.From], () => {
    updateStatusText()
  }, { immediate: true })
  </script>
  