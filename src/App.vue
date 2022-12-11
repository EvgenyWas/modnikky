<template>
  <app-header />
  <main>
    <router-view></router-view>
  </main>
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/Header/Header.vue";
import AppFooter from "./components/Footer/Footer.vue";

export default defineComponent({
  name: "app",
  components: { AppHeader, AppFooter },
});
</script>

<style lang="scss">
@import "./styles/index";
</style>
