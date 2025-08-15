<template>
  <div ref="editorContainer" class="editor-container"></div>

		<title>three.js editor</title>
		<!-- <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"> -->
		

    <el-space direction="horizontal" size="medium" class="f1">
      <LoadJson @imported="handleImported" class="f2"></LoadJson>
    </el-space>

</template>

<style scoped>
.f1 {
  position: fixed;
  top: 90vh;
  left: 10vw;
  width: auto;
  height: auto;
  z-index: 6;
  padding: 10px;
  border-radius: 6px;
  background-color: #b9c7d4 !important;
.f2 {
  z-index: 7;
}
}
</style>
<script setup lang="ts">

  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import * as THREE from 'three';
  
  // 导入 Editor 的 JS 文件
  // @ts-ignore
  import { Editor } from '../../public/three/editor/js/Editor.js';
  // @ts-ignore
  import { Viewport } from '../../public/three/editor/js/Viewport.js';
  // @ts-ignore
  import { Toolbar } from '../../public/three/editor/js/Toolbar.js';
  // @ts-ignore
  import { Script } from '../../public/three/editor/js/Script.js';
  // @ts-ignore
  import { Player } from '../../public/three/editor/js/Player.js';
  // @ts-ignore
  import { Sidebar } from '../../public/three/editor/js/Sidebar.js';
  // @ts-ignore
  import { Menubar } from '../../public/three/editor/js/Menubar.js';
  // @ts-ignore
  import { Resizer } from '../../public/three/editor/js/Resizer.js';

  import LoadJson from '@/components/LoadJson.vue';

  import { AOIConfig } from '@/import/AOIConfig';
  

  declare global {
    interface Window {
        editor: any;
        THREE: any;
    }
  }
  const editorContainer = ref<HTMLDivElement | null>(null);
  
  let editor: any;
  let viewport: any;
  let toolbar: any;
  let script: any;
  let player: any;
  let sidebar: any;
  let menubar: any;
  let resizer: any;
  const handleImported = (config: AOIConfig) => {
    console.log('导入的 AOI 配置:', config);
  };
  onMounted(() => {
    nextTick(() => {
      
      // 初始化 Editor
      editor = new Editor();
      window.editor = editor;
      window.THREE = THREE;
    
      viewport = Viewport(editor);
      toolbar = Toolbar(editor);
      script = Script(editor);
      player = Player(editor);
      sidebar = Sidebar(editor);
      menubar = Menubar(editor);
      resizer = Resizer(editor);
    
    // 挂载 DOM
    if (editorContainer.value) {
      editorContainer.value.appendChild(viewport.dom);
      editorContainer.value.appendChild(toolbar.dom);
      editorContainer.value.appendChild(script.dom);
      editorContainer.value.appendChild(player.dom);
      editorContainer.value.appendChild(sidebar.dom);
      editorContainer.value.appendChild(menubar.dom);
      editorContainer.value.appendChild(resizer.dom);
    }
  
    // 初始化 storage 和保存状态
    editor.storage.init(() => {
      editor.storage.get(async (state: any) => {
        if (state !== undefined) await editor.fromJSON(state);
        const selected = editor.config.getKey('selected');
        if (selected !== undefined) editor.selectByUuid(selected);
      });
  
      const signals = editor.signals;
      const saveState = () => {
        if (editor.config.getKey('autosave') === false) return;
        signals.savingStarted.dispatch();
        editor.storage.set(editor.toJSON());
        signals.savingFinished.dispatch();
      };
      [
        'geometryChanged',
        'objectAdded',
        'objectChanged',
        'objectRemoved',
        'materialChanged',
        'sceneBackgroundChanged',
        'sceneEnvironmentChanged',
        'sceneFogChanged',
        'sceneGraphChanged',
        'scriptChanged',
        'historyChanged'
      ].forEach(event => signals[event].add(saveState));
    });
  
    // 监听窗口 resize
    const onWindowResize = () => editor.signals.windowResize.dispatch();
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    // 拖拽文件
    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      if (!event.dataTransfer) return;
      if (event.dataTransfer.items) editor.loader.loadItemList(event.dataTransfer.items);
      else editor.loader.loadFiles(event.dataTransfer.files!);
    };
    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    };
    window.addEventListener('drop', onDrop);
    window.addEventListener('dragover', onDragOver);
    editor.signals.sceneGraphChanged.dispatch();
    
    // ServiceWorker

		if ( 'serviceWorker' in navigator ) {

        try {

            navigator.serviceWorker.register( 'three/editor/sw.js' );

        } catch ( error ) {

        }

        }
    });
    
  }); 
  
  onBeforeUnmount(() => {
    // 移除事件监听
    window.removeEventListener('resize', () => {});
    window.removeEventListener('drop', () => {});
    window.removeEventListener('dragover', () => {});
  });
  </script>
  
  <style scoped>
  .editor-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  
  /* 引入 Editor CSS */
  @import '/three/editor/css/main.css';
  </style>
  