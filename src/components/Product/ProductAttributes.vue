<template>
  <div class="product__attributes">
    <div class="product__conditions">
      <p class="product__price">
        {{ `${price.currency} ${getPrice(price.value, price.currency)}` }}
      </p>
      <a v-text="'PRE-ORDER'" class="product__pre-order"></a>
    </div>
    <div class="product__color">
      <h5 v-text="'COLOR'" class="product__color-title"></h5>
      <div
        class="product__color-box"
        :style="{ backgroundColor: color.hex }"
        :name="color.name"
      />
    </div>
    <div class="product__sizes">
      <h5 v-text="'SIZE'" class="product__sizes-title"></h5>
      <div class="product__sizes-box">
        <size-button
          v-for="(size, index) in sizes"
          :key="size + index"
          :size="size"
          :is-active="selectedSize === size"
          @click="$emit('selecte', size)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { TColor, TPrice } from "@/types/types";
import SizeButton from "../UI/Buttons/SizeButton.vue";
import { getFormattedPrice } from "@/utils";

export default defineComponent({
  name: "product-attributes",
  components: { SizeButton },
  props: {
    price: {
      type: Object as PropType<TPrice>,
      required: true,
    },
    color: {
      type: Object as PropType<TColor>,
      required: true,
    },
    sizes: {
      type: Array as PropType<string[]>,
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
