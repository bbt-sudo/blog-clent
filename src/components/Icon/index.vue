<template>
 <Icon :size="props.size" :color="props.color" :tag="props.tag">
  <slot name="icon"></slot>
 </Icon>
   
</template>

<script setup lang='ts'>
  import { Icon } from '@vicons/utils'
import {  defineProps } from 'vue';
  const props =defineProps({
    size: {
      type: String,
      require: false
    },
    color: {
      type: String,
      require: false
    },
    tag: {
      type: String,
      require: false
    }
  }) 
</script>
<style scoped lang='scss'>
</style>