<template>
    <section class="top-section">
        <div class="container top-section__container">
            <h2 class="top-section__title">
                NEW COLLECTION
            </h2>
            <p class="top-section__subtitle">
                Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.
            </p>
            <primary-button
                :title="'SHOP NEW ARRIVALS'"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton.vue'

export default defineComponent({
    setup() {
        return {};
    },
    components: { PrimaryButton }
})
</script>

<style scoped>

</style>