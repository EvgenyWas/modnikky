<template>
    <div class="product__attributes">
        <div class="product__conditions">
            <p class="product__price">
                {{ `${price.currency} $${Number(price.value).toFixed(2)}` }}
            </p>
            <a class="product__pre-order">
                PRE-ORDER
            </a>
        </div>
        <div class="product__color">
            <h5 class="product__color-title">
                COLOR
            </h5>
            <div 
                class="product__color-box"
                :style="{backgroundColor: color.hex}"
                :name="color.name"
            ></div>
        </div>
        <div class="product__sizes">
            <h5 class="product__sizes-title">
                SIZE
            </h5>
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
import { defineComponent } from 'vue';
import type { PropType, Ref } from 'vue';
import type { TColor, TPrice } from '@/types/types';
import SizeButton from '../UI/Buttons/SizeButton.vue';

export default defineComponent({
    name: 'product-attributes',
    components: { SizeButton },
    props: {
        price: {
            type: Object as PropType<TPrice>,
            required: true
        },
        color: {
            type: Object as PropType<TColor>,
            required: true
        },
        sizes: {
            type: Array as PropType<string[]>,
            required: true
        },
        selectedSize: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

</style>