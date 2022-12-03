<template>
    <button v-text="title" class="primary-button" :class="{
        'primary-button--black': blackMode,
        'primary-button--dark': darkMode
    }"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'primary-button',
    props: {
        title: {
            type: String,
            default: ''
        },
        blackMode: {
            type: Boolean
        },
        darkMode: {
            type: Boolean
        },
    }
})
</script>

<style scoped>

</style>