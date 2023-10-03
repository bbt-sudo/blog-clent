<template>
  <div class="login-box">
    <div class="login-bg"></div>
    <div class="login">
      <div class="title">
        <p>Hello world</p>
        <p>你好世界</p>
      </div>
      <div class="form">
        <n-input v-model:value="email" type="text" placeholder="基本的 Input" />
        <n-input
          type="password"
          show-password-on="click"
          placeholder="自定义密码图标"
          :maxlength="8"
          v-model:value="password"
        >
          <template #password-visible-icon>
            <n-icon :size="16" :component="GlassesOutline" />
          </template>
          <template #password-invisible-icon>
            <n-icon :size="16" :component="Glasses" />
          </template>
        </n-input>
        <n-button color="#8a2be2" @click="login">
          登录
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {  reactive, toRefs, onBeforeMount, onMounted, watchEffect, ref } from 'vue';
import { GlassesOutline, Glasses } from '@vicons/ionicons5'
import {useUserStore} from '../../store/UserStore/useUserStore'
const userStroe = useUserStore()
const email = ref('')
const password = ref('')

const login = () => {
  userStroe.getUser(email.value,password.value)
}
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
body{
  background-color: black;
}
.login-box{
  width: 100vw;
  height: 100vh;
  background-color: #0E0C1A;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}
.login-bg{
  width: 50%;
  height: 100%;
  background-image: url(../../assets/img/1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  opacity: 0.3;
  filter: blur(4px);
}
.login{
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  margin-left: 10%;
  .form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    :deep(.n-input){
      background-color: #0E0C1A;
      color: white;
      border: #55545C;
    }
    :deep(.n-input__input-el){
      color: aliceblue;
    }
  }
}
.title {
  p:first-child{
    font-size: 140%;
    font-weight: 1000;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to top, #d5dee7 0%, #ffafbd 25%, #c9ffbf 100%);
  }
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0px;
}
</style>