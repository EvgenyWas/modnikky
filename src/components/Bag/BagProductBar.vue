<template>
    <div class="bag-product-bar">
        <div class="bag-product-bar__header">
            <h3 class="bag-product-bar__title">
                {{ product.name }}
            </h3>
            <p class="product__price">
                {{
                `${product.price.currency} $${Number(product.price.value).toFixed(2)}`
                }}
            </p>
        </div>
        <div class="bag-product-bar__body">
            <p>
                {{ `COLOR: ${product.color.name.toUpperCase()}` }}
            </p>
            <p>
                {{ `SIZE: ${product.selectedSize}` }}
            </p>
            <p>
                {{ `QUANTITY: ${product.quantity}` }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import type { TBagItem } from "@/types/types";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "bag-product-bar",
    props: {
        product: {
            type: Object as PropType<TBagItem>,
            default: [],
        },
    }
});
</script>

<style scoped>

</style>
