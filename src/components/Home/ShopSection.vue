<template>
  <section class="shop-section" v-lazy-container="{ selector: 'img' }">
    <div class="shop-section__container container">
      <div class="shop-section__subject">
        <h5 v-text="'SHOP INSTAGRAM'" class="shop-section__title"></h5>
        <a v-text="'SHOP'" class="shop-section__link" href="#"></a>
      </div>
      <div class="shop-section__images">
        <div class="shop-section__image-box">
          <picture class="shop-section__image">
            <source
              srcset="/src/assets/shop/instagram-image-placeholder-1.webp"
              type="image/webp"
            />
            <img
              data-src="/src/assets/shop/instagram-image-placeholder-1.jpg"
              alt="Outfit image"
            />
          </picture>
        </div>
        <div class="shop-section__image-box">
          <picture class="shop-section__image">
            <source
              srcset="/src/assets/shop/instagram-image-placeholder-2.webp"
              type="image/webp"
            />
            <img
              data-src="/src/assets/shop/instagram-image-placeholder-2.jpg"
              alt="Outfit image"
            />
          </picture>
        </div>
        <div class="shop-section__image-box">
          <picture class="shop-section__image">
            <source
              srcset="/src/assets/shop/instagram-image-placeholder-3.webp"
              type="image/webp"
            />
            <img
              data-src="/src/assets/shop/instagram-image-placeholder-3.jpg"
              alt="Outfit image"
            />
          </picture>
        </div>
        <div class="shop-section__image-box">
          <picture class="shop-section__image">
            <source
              srcset="/src/assets/shop/instagram-image-placeholder-4.webp"
              type="image/webp"
            />
            <img
              data-src="/src/assets/shop/instagram-image-placeholder-4.jpg"
              alt="Outfit image"
            />
          </picture>
        </div>
        <div class="shop-section__image-box">
          <picture class="shop-section__image">
            <source
              srcset="/src/assets/shop/instagram-image-placeholder-5.webp"
              type="image/webp"
            />
            <img
              data-src="/src/assets/shop/instagram-image-placeholder-5.jpg"
              alt="Outfit image"
            />
          </picture>
        </div>
      </div>
      <h5 v-text="'#MODNIKKY'" class="shop-section__name"></h5>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "shop-section",
});
</script>

<style scoped></style>
