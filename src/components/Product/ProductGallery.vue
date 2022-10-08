<template>
    <div class="product__gallery">
        <img 
            v-for="image in images" 
            :key="image" 
            :src="image" 
            alt="Product image"
            class="product__image"
        >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';

export default defineComponent({
    name: 'product-gallery',
    props: {
        images: {
            type: Array as PropType<string[]>,
            required: true
        }
    }
})
</script>

<style scoped>

</style>