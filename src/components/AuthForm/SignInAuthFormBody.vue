<template>
    <input :value="email" type="email" name="email" class="auth-form__input"
        :class="{ 'auth-form__input--invalid': !isValidEmail }" placeholder="Email"
        @input="$emit('updateEmail', $event.target?.value)">
    <label v-show="!isValidEmail" for="email" class="auth-form__validation-label">{{ invalidEmailMsg }}</label>
    <input :value="password" type="password" name="password" class="auth-form__input"
        :class="{ 'auth-form__input--invalid': !isValidPassword }" placeholder="Password"
        @input="$emit('updatePassword', $event.target?.value)">
    <label v-show="!isValidPassword" for="password" class="auth-form__validation-label">{{ invalidPasswordMsg }}</label>
</template>

<script lang="ts">
import { validateEmail, validatePassword } from '@/utils/utils';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sign-in-body',
    emits: ['updateEmail', 'updatePassword', 'sign-in'],
    props: {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        invalidEmailMsg: {
            type: String,
            default: 'Your email is invalid...',
        },
        invalidPasswordMsg: {
            type: String,
            default: 'Invaild password',
        },
    },
    data() {
        return {
            isValidEmail: true,
            isValidPassword: true,
        }
    },
    watch: {
        email(newEmail) {
            if (validateEmail(newEmail) || newEmail === '') {
                this.isValidEmail = true;
            } else {
                this.isValidEmail = false;
            }
        },
        password(newPassword) {
            if (validatePassword(newPassword) || newPassword === '') {
                this.isValidPassword = true;
            } else {
                this.isValidPassword = false;
            }
        },
    }
})
</script>

<style scoped>

</style>