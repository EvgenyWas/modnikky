<template>
  <div class="product-button">
    <button
      v-text="title"
      class="product-button__bag-btn"
      @click="$emit('add-to-bag')"
    ></button>
    <button
      class="product-button__wishlist-btn"
      @click="$emit('handle-wishlist')"
    >
      <img
        src="@/assets/icons/liked-icon.svg"
        alt="Wishlist icon"
        v-if="isInWishlist"
      />
      <img src="@/assets/icons/like-icon.svg" alt="Wishlist icon" v-else />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "product-button",
  props: {
    title: {
      type: String,
      default: "",
    },
    isInWishlist: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped></style>
