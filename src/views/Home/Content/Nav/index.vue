<template>
  <div class="nav-box">
    <n-menu :options="menuOptions" 
       v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"  
    />
  </div>
</template>

<script setup lang='ts'>
import {  Ref,reactive, toRefs, onBeforeMount, onMounted, watchEffect, h, Component, ref } from 'vue';
import { NIcon, type MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  Newspaper,
  HomeOutline as HomeIcon,Videocam
} from '@vicons/ionicons5'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const collapsed: Ref<Boolean>= ref(false)
const activeKey:Ref<string | null> = ref(null)
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
     label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '文章' }
      ),
    key: 'article',
    icon: renderIcon(Newspaper),
    children: [
      {
        label: () =>
          h(
          RouterLink,
          {
            to: {
              name: 'home',
              params: {
                lang: 'zh-CN'
              }
            }
          },
          { default: () => '文章-1' }
          ),
        key: 'article-1',
        icon: renderIcon(Newspaper),
      }
    ]
  },
  {
     label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '视频' }
      ),
    key: 'video',
    icon: renderIcon(Videocam),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'home',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '视频-1' }
          ),
        key: 'video-1',
        icon: renderIcon(Videocam),
      }
    ]
  }
]
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
.nav-box{
  width: 19%;
  margin-right: 1%;
}

</style>