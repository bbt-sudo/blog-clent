<template>
  <Header></Header>
  <Content></Content>
  <div class="footer">
    <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2023015622号-1</a>
  </div>
</template>

<script setup lang='ts'>
import {  reactive, toRefs, onBeforeMount, onMounted, watchEffect } from 'vue';
import Header from './Header/index.vue'
import Content from './Content/index.vue'
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
.footer{
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>