<template>
    <section class="bag">
        <div class="bag__container container">
            <h2 class="bag__title">
                BAG
                <span class="bag__amount">
                    {{ bagAmount }}
                </span>
            </h2>
            <div class="bag__products">
                <bag-product v-for="product in bagStore.getBag" :key="product.id" :product="product"
                    @remove="bagStore.removeProductFromBag(product.id, product.quantity)" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useBagStore } from '@/stores/useBagStore';
import { defineComponent, computed } from 'vue'
import BagProduct from '@/components/Bag/BagProduct.vue'

export default defineComponent({
    name: "bag-page",
    components: { BagProduct },
    setup() {
        const bagStore = useBagStore();
        const bagAmount = computed(() => {
            const correctEnding = bagStore.getBagAmount === 1 ? "item" : "items";
            const bagAmount = `${bagStore.getBagAmount} ${correctEnding}`;
            return bagAmount;
        });
        return {
            bagStore,
            bagAmount
        };
    }
})
</script>

<style scoped>

</style>