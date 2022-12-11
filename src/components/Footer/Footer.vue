<template>
  <footer class="footer">
    <div class="footer__container container">
      <updates-form />
      <footer-table v-if="windowDimensions.width > 576" />
      <footer-mobile v-else />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpdatesForm from "./UpdatesForm.vue";
import FooterTable from "./FooterTable.vue";
import { useWindowDimensions } from "@/composables";
import FooterMobile from "./FooterMobile.vue";

export default defineComponent({
  name: "app-footer",
  components: { UpdatesForm, FooterTable, FooterMobile },
  setup() {
    const windowDimensions = useWindowDimensions();

    return {
      windowDimensions,
    };
  },
});
</script>

<style scoped></style>
