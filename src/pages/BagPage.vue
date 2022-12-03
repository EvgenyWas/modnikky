<template>
    <section class="bag">
        <div class="bag__container container">
            <h2 class="bag__title">
                BAG
                <span v-text="bagAmount" class="bag__amount"></span>
            </h2>
            <TransitionGroup name="list" tag="div" class="bag__products">
                <bag-product v-for="product in bagStore.getBag" :key="product.id" :product="product"
                    @increase="bagStore.setSameProductToBag(product)"
                    @decrease="bagStore.decreaseProductQuantity(product)"
                    @remove="bagStore.removeProductFromBag(product)" />
            </TransitionGroup>
            <bag-total :total="bagStore.getBagTotal" @proceed-to-checkout="handleProceed" />
        </div>
    </section>
</template>

<script lang="ts">
import { useBagStore } from '@/stores/useBagStore';
import { defineComponent, computed, TransitionGroup } from 'vue'
import BagProduct from '@/components/Bag/BagProduct.vue'
import BagTotal from '@/components/Bag/BagTotal.vue';
import { getCorrectItemsAmountString } from '@/utils';

export default defineComponent({
    name: "bag-page",
    components: { BagProduct, TransitionGroup, BagTotal },
    setup() {
        const bagStore = useBagStore();
        const bagAmount = computed(() => getCorrectItemsAmountString(bagStore.getBagAmount));

        return {
            bagStore,
            bagAmount
        };
    },
    methods: {
        handleProceed() {
            this.bagStore.$reset();
        }
    }
})
</script>

<style scoped>

</style>