<template>
    <div class="my-swiper">
        <div class="my-swiper__container">
            <swiper :slidesPerView="4" :spaceBetween="12" freeMode navigation :modules="modules" :loop="true">
                <swiper-slide v-for="product in products" :key="product.id">
                    <product-card :product="product" />
                </swiper-slide>
                <prev-swiper-button />
                <next-swiper-button />
            </swiper>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { FreeMode, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { TProduct } from '@/types/types'
import ProductCard from '@/components/Home/ProductCard.vue'
import PrevSwiperButton from './PrevSwiperButton.vue'
import NextSwiperButton from './NextSwiperButton.vue'

export default defineComponent({
    name: 'app-swiper',
    components: {
        Swiper,
        SwiperSlide,
        ProductCard,
        PrevSwiperButton,
        NextSwiperButton
    },
    props: {
        products: {
            type: Object as PropType<TProduct[]>,
            required: true
        },
    },
    setup() {
        return {
            modules: [FreeMode, Navigation]
        }
    }
})
</script>

<style scoped>

</style>