<template>
  <div class="aside-box">
    <div class="userInfo-box">
      <div class="avatar-box">
         <div class="avatar">
          
         </div>
         <img src="../../../../assets/ren.svg" alt="">
         <n-avatar
          :style="{
            color: 'yellow',
            backgroundColor: 'red'
          }"
          class="n-avatar"
          >
            M
          </n-avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect } from 'vue';
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
.aside-box{
  width: 19%;
  margin-left: 1%;
  background-color: #fff;
  position: relative;
}
.userInfo-box{
  width: 90%;
  height: 30%;
  margin-left: 5%;
  margin-top: 10px;
  position: relative;
}
.avatar-box{
  width: 100%;
  height: 150px;
  position: relative;
}
.avatar-box img {
  position: absolute;
  width: 50%;
  left: 25%;
  top: -30%;
}
.n-avatar{
  position: absolute;
  width:30%;
  height: 30%;
  left: 35%;
  bottom: 0;
  border-radius: 100%;
}
.avatar{
  background-color: rgb(80, 203, 50);
  width: 80%;
  height: 80%;
  left: 10%;
  position: absolute;
  margin-top: 5%;
  border-radius: 10% 40% 10% 10%;
}
</style>