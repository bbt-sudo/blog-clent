<template>
  <div class="main-box">
    <div class="main-item">
     <Card class="card" v-for="item in options" :key="item.id">
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
          <n-icon size="40">
            <game-controller-outline />
            {{ item.give }}
          </n-icon>
      </template>
     </Card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect, Ref, ref } from 'vue';
import Card from '../../../../components/Card/index.vue'
import { GameControllerOutline } from '@vicons/ionicons5'

const options: Ref = ref([
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
</style>