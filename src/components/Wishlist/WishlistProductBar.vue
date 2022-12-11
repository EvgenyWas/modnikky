<template>
  <div class="wishlist-product-bar">
    <div class="wishlist-product-bar__header">
      <h3
        v-text="product.name"
        class="wishlist-product-bar__title"
        @click="$router.push(`/product/${product.id}`)"
      ></h3>
      <p class="product__price">
        {{
          `${product.price.currency} $${getPrice(
            product.price.value,
            product.price.currency
          )}`
        }}
      </p>
    </div>
    <div class="wishlist-product-bar__body">
      <p>
        {{ `COLOR: ${product.color.name.toUpperCase()}` }}
      </p>
      <div class="wishlist-product-bar__size">
        <p>SIZE:</p>
        <div class="wishlist-product-bar__sizes-box">
          <size-button
            v-for="(size, index) in product.availableSizes"
            :key="size + index"
            :size="size"
            :is-active="selectedSize === size"
            @click="$emit('selecte', size)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { TProduct } from "@/types/types";
import SizeButton from "@/components/UI/Buttons/SizeButton.vue";
import { getFormattedPrice } from "@/utils";

export default defineComponent({
  name: "wishlist-product-bar",
  components: { SizeButton },
  props: {
    product: {
      type: Object as PropType<TProduct>,
      required: true,
    },
    selectedSize: {
      type: String,
      required: true,
    },
  },
  methods: {
    getPrice(price: number | string, currency: string) {
      return getFormattedPrice(price, currency);
    },
  },
});
</script>

<style scoped></style>
