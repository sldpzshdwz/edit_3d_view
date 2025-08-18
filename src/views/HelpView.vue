<template>
    <div>
      <h1>帮助页面</h1>
      <el-card class="max-w-3xl mx-auto shadow-md rounded-2xl">
        <el-typography>
          <el-typography-title level="3">
            舱内 AOI 编辑功能说明
          </el-typography-title>
          <br></br>
          <el-typography-paragraph>
            使用舱内 AOI 编辑功能时，请使用下方工具栏。以下是功能详解：
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">导入/导出 JSON：</el-text>
            格式为 <el-text type="info" code>
              项目 dms_workflow/config/gaze_aoi
            </el-text> 里的 aoi 文件格式。
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">编辑模式：</el-text>
            可以使用拖动顶点的方式编辑 AOI。
            - 左键：旋转视角
            - 右键：平移视角
            - 滚轮：控制摄像机前进/后退
            - 按住滚轮上下移动：快速前进/后退
          </el-typography-paragraph>
          <br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">顶点吸附模式：</el-text>
            启动后，点击两个顶点，第一个顶点会吸附到第二个顶点的位置。
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">增加节点模式：</el-text>
            启动后，点击同一 AOI 区域内的相邻节点，会在这两个点的连线中点处增加新节点。
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">删除节点模式：</el-text>
            启动后，点击要删除的节点即可删除。
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">移动到中点模式1：</el-text>
            启动后，点击两个顶点，第一个顶点会移动到第一个与第二个顶点的中点位置。
          </el-typography-paragraph>
          <br></br>
          <el-typography-paragraph>
            <el-text tag="b" type="primary" class="font-bold">移动到中点模式2：</el-text>
            启动后，点击三个顶点，第一个顶点会移动到第二个与第三个顶点的中点位置。
          </el-typography-paragraph>
        </el-typography>
      </el-card>
    </div>
    <img :src="img" alt="logo" class="img"/>


  </template>
  
  <script setup lang="ts">
    // @ts-ignore
    import VueMarkdownIt from 'vue3-markdown-it'
    import img from "@/assets/4.jpg";
  </script>
  
  <style scoped>
  h1 {
    color: #ff6600;
  }
  .img {
  position: absolute;
  bottom: 0;  /* 底部对齐 */
  right: 0;   /* 右侧对齐 */
  width: 200px; /* 可选，设置大小 */
  height: auto;
  margin: 10px; /* 距离边缘的间距 */
}
  </style>
  