<template>
  <div class="card-boc">
     <n-card
        :segmented="{
          content: true,
          footer: 'soft'
        }"
        hoverable
      >
       
        <template #header>
          <slot name="card-header"></slot>
        </template>
        
        <slot name="card-content"></slot>
        <template #footer>
          <slot name="card-footer"></slot>
        </template>
      </n-card>
  </div>
</template>

<script setup lang='ts'>
import {reactive, toRefs, onBeforeMount, onMounted, watchEffect } from 'vue';
/**
* 仓库
*/
/**
* 路由对象
*/
/**
* 路由实例
*/
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='scss'>
</style>