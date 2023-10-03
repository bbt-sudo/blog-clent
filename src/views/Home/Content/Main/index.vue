<template>
  <div class="main-box">
    <div class="main-item">
     <l-card class="card" v-for="item in articles" :key="item.id">
      <template #card-header>
        <div class="main-header">
          <n-avatar
            :style="{
              color: 'yellow',
              backgroundColor: 'red'
            }"
          >
            {{ item.author.head_Sculpture === null? 'null':item.author.head_Sculpture }}
          </n-avatar>
          <span>{{ item.author.nick_Name }}</span>
        </div>
      </template>
      <template #card-content><div  v-html="item.content" />
        {{ console.log(item) }}
      </template>
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
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect, shallowRef } from 'vue';
import LCard from '../../../../components/L-Card/index.vue'
import { ArrowRedoCircle, Star,ChatboxEllipses,HeartSharp } from '@vicons/ionicons5'
import {useHomeStore} from '../../../../store/HomeStoer/useHomeStore'
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { articles } = storeToRefs(homeStore)
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
onBeforeMount(async () => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
  await homeStore.getArticles()
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  console.log(1);
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
.main-header{
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>