<template>
    <footer class="footer">
        <div class="footer__container container">
            <updates-form />
            <footer-table />
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UpdatesForm from './UpdatesForm.vue'
import FooterTable from './FooterTable.vue'

export default defineComponent({
    name: 'my-footer',
    components: {
        UpdatesForm,
        FooterTable
    }
})
</script>

<style scoped>

</style>