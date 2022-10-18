<template>
    <table class="footer__table">
        <thead>
            <tr>
                <th>CUSTOMER SERVICE</th>
                <th>INFO</th>
                <th>FOLLOW US</th>
                <th>CONTACT US</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#">CONTACT</a></td>
                <td><a href="#">GIFT VOUCHERS</a></td>
                <td class="footer__social">
                    <img src="../../assets/logos/facebok-logo.svg" alt="Facebook">
                    <a href="#">FACEBOOK</a>
                </td>
                <td>
                    <a href="mailto:hello@modnikky.com" target="_blank" rel="noopener noreferrer">hello@modnikky.com</a>
                </td>
            </tr>
            <tr>
                <td><a href="#">TRACK ORDER</a></td>
                <td><a href="#">SIZE GUIDE</a></td>
                <td class="footer__social">
                    <img src="../../assets/logos/odonklassniki-logo.svg" alt="Odnoklassniki">
                    <a href="#">ODNOKLASSNIKI</a>
                </td>
                <td>+351 XXX XXX XXX</td>
            </tr>
            <tr>
                <td><a href="#">DELIVERY & RETURNS</a></td>
                <td><a href="#">CAREERS AT MODNIKKY</a></td>
                <td class="footer__social">
                    <img src="../../assets/logos/instagram-logo.svg" alt="Instagram">
                    <a href="#">INSTAGRAM</a>
                </td>
                <td>Visit us in Lisbon, Portugal</td>
            </tr>
            <tr>
                <td><a href="#">PAYMENT</a></td>
                <td><a href="#">ABOUT US</a></td>
            </tr>
            <tr>
                <td><a href="#">MAKE A RETURN</a></td>
                <td><a href="#">LEGAL POLICIES</a></td>
            </tr>
            <tr>
                <td><a href="#">FAQ</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'footer-table'
})
</script>

<style scoped>

</style>