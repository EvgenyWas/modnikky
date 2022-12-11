<template>
  <div class="product__details">
    <accordion-item
      @change-active-item="changeActiveItem(1)"
      :title="'PRODUCT DESCRIPTION'"
      :isActive="activeItem === 1"
    >
      <p v-text="description" class="product__text"></p>
    </accordion-item>
    <accordion-item
      @change-active-item="changeActiveItem(2)"
      :title="'SHIPPING & RETURNS'"
      :isActive="activeItem === 2"
    >
      <p class="product__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti autem
        ducimus fugiat debitis tempore nisi magnam eligendi facere voluptate.
        Alias, ratione vitae fugit veniam esse ipsa totam suscipit libero ea?
      </p>
    </accordion-item>
    <accordion-item
      @change-active-item="changeActiveItem(3)"
      :title="'FABRIC COMPOSITION'"
      :isActive="activeItem === 3"
    >
      <p class="product__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
        aperiam cupiditate architecto quidem dolores ipsa eos ullam dignissimos,
        nobis quibusdam consectetur nostrum voluptates beatae culpa autem, quod
        quisquam. Molestias.
      </p>
    </accordion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccordionItem from "../UI/AccordionItem/AccordionItem.vue";

export default defineComponent({
  name: "product-details",
  components: { AccordionItem },
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeItem: 0,
    };
  },
  methods: {
    changeActiveItem(item: number) {
      this.activeItem = this.activeItem === item ? 0 : item;
    },
  },
});
</script>

<style scoped></style>
