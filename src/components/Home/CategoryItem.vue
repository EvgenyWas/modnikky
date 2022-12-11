<template>
  <div class="category-item">
    <div class="category-item__container">
      <img class="category-item__image" v-bind="$attrs" />
      <h4 v-text="title" class="category-item__title"></h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "category-item",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
