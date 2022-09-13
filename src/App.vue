<template>
  <my-header/>
  <div>
    <router-view></router-view>
  </div>
  <my-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from '@/components/Header/Header.vue'
import MyFooter from './components/Footer/Footer.vue';

export default defineComponent({
  components: { 
    MyHeader, MyFooter 
  },
  
})
</script>

<style lang="scss">
  @import './styles/index';
</style>