<template>
    <button class="size-button">
        <p class="size-button__title">
            {{ size }}
        </p>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'size-button',
    props: {
        size: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

</style>