<template>
    <button class="my-swiper__next-btn" @click="swiper.slideNext()">
    </button>
</template>

<script lang="ts">
import { useSwiper } from 'swiper/vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const swiper = useSwiper();

        return {
            swiper
        }
    }
})
</script>

<style scoped>

</style>