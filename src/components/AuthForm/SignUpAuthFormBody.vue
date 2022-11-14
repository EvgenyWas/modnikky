<template>
    <input type="text" class="auth-form__input">
    <input type="text" class="auth-form__input">
    <sign-in-body :invalid-password-msg="invalidPasswordMsg" />
    <div class="auth-form__subscribtion">
        <label class="checkbox-container">Two
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
        <p class="auth-form__subscribtion-msg">
            Let's get personal! We'll send you only the good stuff:
            <span>Exclusive early access to Sale, new arrivals and promotions. No nasties.</span>
        </p>
    </div>
    <p class="auth-form__terms">
        By signing up you agree to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignInBody from './SignInAuthFormBody.vue';

export default defineComponent({
    name: 'sign-in-body',
    components: { SignInBody },
    props: {
        invalidPasswordMsg: {
            type: String,
        },
    }
})
</script>

<style scoped>

</style>