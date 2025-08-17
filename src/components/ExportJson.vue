<template>
    <div>
      <button @click="exportAOI">导出 AOI JSON</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { AllAOIInstance, AOIInstance, vertex, AOIPoint } from '@/import/AOIConfig'; // 假设你的类在 AOIConfig.ts
  
  export default defineComponent({
    name: 'AOIExporter',
    props: {
      allAOI: {
        type: Object as PropType<AllAOIInstance>,
        required: true
      }
    },
    methods: {
      exportAOI() {
        const allAOI = this.allAOI;
  
        const aois = allAOI.AOIInstances.map((instance: AOIInstance) => {
          return {
            name: instance.name,
            aoi: instance.vertices.map((v: vertex) => [v.at.x, v.at.y, v.at.z]),
            scale: instance.scale,
            id: instance.id
          };
        });
  
        const data = {
          aoi_duration_threshold: allAOI.aoi_duration_threshold,
          non_distracted_aois: allAOI.non_distracted_aois,
          aois: aois
        };
  
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AOIConfig.json';
        link.click();
        URL.revokeObjectURL(url);
      }
    }
  });
  </script>
  