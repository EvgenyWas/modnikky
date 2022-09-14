<template>
    <top-section/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopSection from '@/components/Home/TopSection.vue'

export default defineComponent({
    setup() {
        return {};
    },
    mounted() {
        console.log(this.$router.currentRoute.value);
    },
    components: { TopSection }
})
</script>

<style scoped>

</style>