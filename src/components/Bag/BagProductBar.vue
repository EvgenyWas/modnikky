<template>
    <div class="bag-product-bar">
        <div class="bag-product-bar__header">
            <h3 class="bag-product-bar__title">
                {{ product.name }}
            </h3>
            <p class="product__price">
                {{
                        `${product.price.currency} ${getPrice(product.price.value, product.price.currency)}`
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
import { getFormattedPrice } from "@/utils/utils";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "bag-product-bar",
    props: {
        product: {
            type: Object as PropType<TBagItem>,
            default: [],
        },
    },
    methods: {
        getPrice(price: number | string, currency: string) {
            return getFormattedPrice(price, currency);
        }
    }
});
</script>

<style scoped>

</style>
