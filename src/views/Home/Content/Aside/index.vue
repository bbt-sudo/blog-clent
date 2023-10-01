<template>
  <div class="aside-box">
    <div class="userInfo-box">
      <div class="avatar-box">
         <n-avatar
          :style="{
            color: 'yellow',
            backgroundColor: 'red'
          }"
          class="avatar"
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
}
.userInfo-box{
  width: 90%;
  height: 30%;
  margin-left: 5%;
  margin-top: 10px;
}
.avatar-box{
  width: 80%;
  height: 50%;
  left: 10%;
  position: relative;
  background: url(../../../../assets/ren.svg) no-repeat ;
  background-size: 50%;
  background-position-x: center;
  background-position-y: 110%;
  background-color: red;
  border-radius: 25px 50px 25px 25px;
  display: flex;
  justify-content: center;

}
.avatar{
  position: absolute;
  bottom: 0;
}
</style>