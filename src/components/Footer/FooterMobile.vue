<template>
    <div class="footer-mobile">
        <div class="footer-mobile__container">
            <div class="footer-mobile__group">
                <div class="footer-mobile__header">
                    <button 
                        class="footer-mobile__btn"
                        @click="changeActiveItem(1)"
                        :class="{
                            'footer-mobile__btn--active': activeItem === 1
                        }"
                    ></button>
                    <h4 class="footer-mobile__title">
                        CUSTOMER SERVICE
                    </h4>
                </div>
                <Transition>
                    <ol
                        class="footer-mobile__list"
                        v-if="activeItem === 1"
                    >
                        <li><a href="#">CONTACT</a></li>
                        <li><a href="#">TRACK ORDER</a></li>
                        <li><a href="#">DELIVERY & RETURNS</a></li>
                        <li><a href="#">PAYMENT</a></li>
                        <li><a href="#">MAKE A RETURN</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ol>
                </Transition>
            </div>
            <div class="footer-mobile__group">
                <div class="footer-mobile__header">
                    <button 
                        class="footer-mobile__btn"
                        @click="changeActiveItem(2)"
                        :class="{
                            'footer-mobile__btn--active': activeItem === 2
                        }"
                    ></button>
                    <h4 class="footer-mobile__title">
                        INFO
                    </h4>
                </div>
                <Transition>
                    <ol 
                        class="footer-mobile__list"
                        v-if="activeItem === 2"
                    >
                        <li><a href="#">GIFT VOUCHERS</a></li>
                        <li><a href="#">SIZE GUIDE</a></li>
                        <li><a href="#">CAREERS AT MODNIKKY</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">LEGAL POLICIES</a></li>
                    </ol>
                </Transition>
            </div>
            <div class="footer-mobile__group">
                <div class="footer-mobile__header">
                    <button 
                        class="footer-mobile__btn"
                        @click="changeActiveItem(3)"
                        :class="{
                            'footer-mobile__btn--active': activeItem === 3
                        }"
                    ></button>
                    <h4 class="footer-mobile__title">
                        FOLLOW US
                    </h4>
                </div>
                <Transition>
                    <ol 
                        class="footer-mobile__list"
                        v-if="activeItem === 3"
                    >
                        <li class="footer-mobile__social-link">
                            <img src="../../assets/logos/facebok-logo.svg" alt="Facebook">
                            <a href="#">FACEBOOK</a>
                        </li>
                        <li class="footer-mobile__social-link">
                            <img src="../../assets/logos/odonklassniki-logo.svg" alt="Odnoklassniki">
                            <a href="#">ODNOKLASSNIKI</a>
                        </li>
                        <li class="footer-mobile__social-link">
                            <img src="../../assets/logos/instagram-logo.svg" alt="Instagram">
                            <a href="#">INSTAGRAM</a>
                        </li>
                    </ol>
                </Transition>
            </div>
            <div class="footer-mobile__group">
                <div class="footer-mobile__header">
                    <button 
                        class="footer-mobile__btn"
                        @click="changeActiveItem(4)"
                        :class="{
                            'footer-mobile__btn--active': activeItem === 4
                        }"
                    ></button>
                    <h4 class="footer-mobile__title">
                        CONTACT US
                    </h4>
                </div>
                <Transition>
                    <ol 
                        class="footer-mobile__list"
                        v-if="activeItem === 4"
                    >
                        <li>hello@modnikky.com</li>
                        <li>+351 XXX XXX XXX</li>
                        <li>Visit us in Lisbon, Portugal</li>
                    </ol>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'footer-mobile',
    data() {
        return {
            activeItem: 0
        }
    },
    methods: {
        changeActiveItem(item: number) {
            this.activeItem = this.activeItem === item ? 0 : item;
        }
    }
})
</script>

<style scoped>

</style>