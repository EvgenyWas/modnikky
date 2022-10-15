<template>
    <button 
        class="my-swiper__prev-btn"
        @click="swiper.slidePrev()"
    >
    </button>
</template>

<script lang="ts">
import { useSwiper } from 'swiper/vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        const swiper = useSwiper();

        return {
            swiper
        }
    }
})
</script>

<style scoped></style>