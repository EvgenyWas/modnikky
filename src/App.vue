<template>
  <my-header/>
  <main>
    <router-view></router-view>
  </main>
  <my-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from '@/components/Header/Header.vue'
import MyFooter from './components/Footer/Footer.vue';

export default defineComponent({
  name: 'app',
  components: { MyHeader, MyFooter },
})
</script>

<style lang="scss">
  @import './styles/index';
</style>