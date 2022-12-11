<template>
  <section class="top-section">
    <div class="container top-section__container">
      <div class="top-section__box" />
      <h2 v-text="'NEW COLLECTION'" class="top-section__title"></h2>
      <p class="top-section__subtitle">
        Our easiest chuck-on-and-go staples come with a serious style heritage
        that’s liberating, sexy, comfy and supremely cool.
      </p>
      <primary-button
        :title="'SHOP NEW ARRIVALS'"
        v-if="windowDimensions.width > 576"
      />
      <primary-button :title="'SHOP NEW ARRIVALS'" black-mode v-else />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
import { useWindowDimensions } from "@/composables";

export default defineComponent({
  name: "top-section",
  components: { PrimaryButton },
  setup() {
    const windowDimensions = useWindowDimensions();

    return {
      windowDimensions,
    };
  },
});
</script>

<style scoped></style>
