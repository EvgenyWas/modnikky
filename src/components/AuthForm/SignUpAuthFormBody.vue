<template>
    <input type="text" class="auth-form__input" placeholder="First Name">
    <input type="text" class="auth-form__input" placeholder="Last Name">
    <sign-in-body :invalid-password-msg="invalidPasswordMsg" />
    <div class="auth-form__subscribtion">
        <label class="checkbox-container">
            <input type="checkbox" @change="$emit('checkSubscription')">
            <span class="checkmark"></span>
        </label>
        <p class="auth-form__subscribtion-msg">
            Let's get personal! We'll send you only the good stuff
            <br />
            Exclusive early access to Sale, new arrivals and promotions. No nasties.
        </p>
    </div>
    <p class="auth-form__terms">
        By signing up you agree to <a href="#" class="auth-form__terms-link">Terms of Service</a> and <a href="#"
            class="auth-form__terms-link">Privacy Policy</a>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignInBody from './SignInAuthFormBody.vue';

export default defineComponent({
    name: 'sign-up-body',
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