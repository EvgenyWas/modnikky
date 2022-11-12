<template>
    <div v-show="!isClickedProceed" class="bag-total">
        <h4 class="bag-total__title">
            Total {{ getTotal(total) }}
        </h4>
        <primary-button :title="'PROCEED TO CHECKOUT'" dark-mode class="bag-total__btn" @click="handleProceed" />
        <div class="bag-total__cards-box">
            <a href="#" class="bag-total__card">
                <img src="@/assets/logos/maestro-logo.svg" alt="Maestro">
            </a>
            <a href="#" class="bag-total__card">
                <img src="@/assets/logos/visa-logo.svg" alt="Maestro">
            </a>
        </div>
    </div>
    <h2 v-show="isClickedProceed" class="bag-total-greeting">Thank you for the order!</h2>
</template>

<script lang="ts">
import { getFormattedPrice } from '@/utils/utils';
import { DEFAULT_CURRENCY } from '@/config';
import { defineComponent } from 'vue';
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton.vue';

export default defineComponent({
    name: "bag-total",
    components: { PrimaryButton },
    emits: ['proceed-to-checkout'],
    props: {
        total: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isClickedProceed: false
        }
    },
    methods: {
        getTotal(total: number) {
            return `${DEFAULT_CURRENCY} ${getFormattedPrice(total)}`;
        },
        handleProceed() {
            if (this.total) {
                this.$emit('proceed-to-checkout');
                this.isClickedProceed = true;
            }
        }
    },
})
</script>

<style scoped>

</style>