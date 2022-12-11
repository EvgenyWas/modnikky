<template>
  <div class="auth-page">
    <div class="auth-page__container">
      <auth-form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthForm from "@/components/AuthForm/AuthForm.vue";

export default defineComponent({
  name: "auth-page",
  components: { AuthForm },
});
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";

.auth-page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  background-color: $grey-cover;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
}
</style>
