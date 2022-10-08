<template>
    <div class="footer-mobile">
        <div class="footer-mobile__container">
            <accordion-item 
                @change-active-item="changeActiveItem(1)"
                :title="'CUSTOMER SERVICE'"
                :isActive="activeItem === 1"
            >
                <ol
                    class="footer-mobile__list"
                >
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">TRACK ORDER</a></li>
                    <li><a href="#">DELIVERY & RETURNS</a></li>
                    <li><a href="#">PAYMENT</a></li>
                    <li><a href="#">MAKE A RETURN</a></li>
                    <li><a href="#">FAQ</a></li>
                </ol>
            </accordion-item>
            <accordion-item
                @change-active-item="changeActiveItem(2)"
                :title="'INFO'"
                :isActive="activeItem === 2"
            >
                <ol 
                    class="footer-mobile__list"
                >
                    <li><a href="#">GIFT VOUCHERS</a></li>
                    <li><a href="#">SIZE GUIDE</a></li>
                    <li><a href="#">CAREERS AT MODNIKKY</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">LEGAL POLICIES</a></li>
                </ol>
            </accordion-item>
            <accordion-item
                @change-active-item="changeActiveItem(3)"
                :title="'FOLLOW US'"
                :isActive="activeItem === 3"
            >
                <ol 
                    class="footer-mobile__list"
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
            </accordion-item>
            <accordion-item
                @change-active-item="changeActiveItem(4)"
                :title="'CONTACT US'"
                :isActive="activeItem === 4"
            >
                <ol 
                    class="footer-mobile__list"
                >
                    <li>hello@modnikky.com</li>
                    <li>+351 XXX XXX XXX</li>
                    <li>Visit us in Lisbon, Portugal</li>
                </ol>
            </accordion-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AccordionItem from '../UI/AccordionItem/AccordionItem.vue';

export default defineComponent({
    name: 'footer-mobile',
    components: { AccordionItem },
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