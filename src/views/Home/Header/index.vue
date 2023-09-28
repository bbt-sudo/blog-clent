<template>
  <div class="header-box">
    <div class="header">
      <div class="logo-box">
        <span>hello world!</span>
        <Search></Search>
      </div>
      <div class="search-box"> 
        <n-input round placeholder="搜索">
          <template #suffix>
            <Icon>
              <template #icon>
                <SearchOutlined></SearchOutlined>
              </template>
            </Icon>
          </template>
        </n-input> 
      </div>
      <div class="message-box">
        <Icon :color="item.color" size="20px" v-for="item in icons" :key="item.name" @mouseenter="handleMouseEnter(item)" @mouseleave="handleMouseLeave(item)">
          <template #icon>
            <component :is="item.icon"></component>
          </template>
        </Icon>
      </div>
      <div class="user">
        <n-dropdown :show="showDropdown" size="small" :options="options" @select="handleSelect">
          <n-avatar
            :style="{
              color: 'yellow',
              backgroundColor: 'red'
            }"
            @click="handleClick"
          >
            M
          </n-avatar>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, watchEffect, h, ref, Ref, onBeforeUnmount } from 'vue';
import Icon from '../../../components/Icon/index.vue'
import { SearchOutlined,BellTwotone } from '@vicons/antd'
import { ChatboxEllipses,People } from '@vicons/ionicons5'
const icons: Ref<any[]> = ref([
  {
    name: 'BellTwotone',
    icon: h(BellTwotone),
    color:'#e6e6e6'
  },
  {
    name: 'ChatboxEllipses',
    icon: h(ChatboxEllipses),
    color:'#e6e6e6'

  },
  {
    name: 'People',
    icon: h(People),
    color:'#e6e6e6'
  },
])

const handleMouseEnter = (icon: any) => {
  icon.color = '#7CBAE6FF'
}

const handleMouseLeave =(item: { color: string; }) => {
  item.color = "#e6e6e6"; // 设置鼠标移出时的颜色值
}

const showDropdown = ref(false)
const options: Ref<any[]> = ref([
  {
    label: '登录',
    value: '1',
  }
])
const handleSelect = (item: any) => {
  console.log(item);
}
const handleClick = () => {
  const count: Ref<number> = ref(1)
  showDropdown.value = !showDropdown.value;
  const clearClick = setTimeout(() => {
    if(!showDropdown.value) {
      clearTimeout(clearClick);
      return true
    }
    showDropdown.value = false;
    console.log(count.value + 1);
  }, 2000);
};



onBeforeUnmount(() => {
});
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
<style scoped lang="scss">
.header-box {
  width: 100vw;
  height: 10vh;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px  rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .header{
    width: 94vw;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.message-box{
  width: 150px;
  display: flex;
  justify-content: space-between;
}
</style>