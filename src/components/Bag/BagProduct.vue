<template>
    <article class="bag-product">
        <div class="bag-product__container">
            <div class="bag-product__box">
                <img class="bag-product__image" :src="product.images[0]" alt="Product image">
                <bag-product-bar :product="product" />
            </div>
            <div class="bag-product__btn-box">
                <button class="bag-product__btn" @click="$emit('remove')">
                    <img class="bag-product__btn-icon" src="@/assets/icons/remove-icon.svg" alt="Remove icon">
                    REMOVE
                </button>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TBagItem } from '@/types/types';
import BagProductBar from './BagProductBar.vue';

export default defineComponent({
    name: "bag-product",
    components: { BagProductBar },
    props: {
        wishlistMode: {
            type: Boolean,
            default: false
        },
        product: {
            type: Object as PropType<TBagItem>,
            required: true
        }
    }
})
</script>

<style scoped>

</style>