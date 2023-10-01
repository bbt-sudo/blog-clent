<template>
  <div class="content-box">
    <Nav></Nav>
    <Main></Main>
    <Aside></Aside>
  </div>
</template>

<script setup lang='ts'>
import {reactive, toRefs, onBeforeMount, onMounted, watchEffect } from 'vue';
import Aside from "./Aside/index.vue";
import Main from "./Main/index.vue";
import Nav from "./Nav/index.vue";

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
.content-box{
  width: 100%;
  display: flex;
  margin-top: 10px;
}
</style>