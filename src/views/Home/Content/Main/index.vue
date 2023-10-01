<template>
  <div class="main-box">
    <div class="main-item">
     <l-card class="card" v-for="item in options" :key="item.id">
      <template #card-header>
        <n-avatar
          :style="{
            color: 'yellow',
            backgroundColor: 'red'
          }"
        >
          {{ item.user.headerUrl }}
        </n-avatar>
      </template>
      <template #card-content><div  v-html="item.content" /></template>
      <template #card-footer>
        <div class="icons">
          <div class="icon" v-for="icon in icons" :key="icon.id">
            <n-icon size="20"   :component="icon.icon" />
            1
          </div>
        </div>

      </template>
     </l-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect, Ref, ref, shallowRef } from 'vue';
import LCard from '../../../../components/L-Card/index.vue'
import { ArrowRedoCircle, Star,ChatboxEllipses,HeartSharp } from '@vicons/ionicons5'

const options: Ref = shallowRef([
  {
    user: {
      headerUrl: 'm'
    },
    id: 1,
    content: '<p>p</p>',
    give: 10
  },
  {
    user: {
      headerUrl: 'x'
    },
    id: 2,
    content: '<p>p</p>',
    give: 10
  },
  {
    user: {
      headerUrl: 'd'
    },
    id: 3,
    content: '<p>p</p>',
    give: 10
  },
  {
    user: {
      headerUrl: '5'
    },
    id: 4,
    content: '<p>p</p>',
    give: 10
  }
])
const icons = shallowRef([
  {
    icon: Star,
    id: 1
  },
  {
    icon: HeartSharp,
    id: 1
  },
  {
    icon: ChatboxEllipses,
    id: 1
  },
  {
    icon: ArrowRedoCircle,
    id: 1
  }
])

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
.main-box{
  width: 60%;
}
.main-item{
  width: 98%;
  margin-left: 1%;
}
.card{
  margin-bottom: 20px;
}
.icons{
  display: flex;
  justify-content: space-around;
}
.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
  .icon:hover{
  color: red;
}
</style>