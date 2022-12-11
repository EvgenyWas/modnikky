<template>
  <button
    class="size-button"
    :class="{
      'size-button--active': isActive,
    }"
  >
    <p v-text="size" class="size-button__title"></p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "size-button",
  props: {
    size: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped></style>
