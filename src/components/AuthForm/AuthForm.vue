<template>
    <form class="auth-form" @submit.prevent>
        <div class="auth-form__header">
            <label for="close-btn" class="auth-form__name">{{ formName }}</label>
            <input type="button" name="close-btn" class="auth-form__close-btn" @click="closeForm">
        </div>
        <div class="auth-form__body">
            <sign-up-body v-if="isNewUser" :invalid-password-msg="invalidPasswordMsg"
                @check-subscription="isCheckedSubscription = !isCheckedSubscription" />
            <sign-in-body v-else />
        </div>
        <div class="auth-form__footer">
            <primary-button :title="submitTitle" dark-mode @click="submitForm" />
            <input v-show="isNewUser" type="button" value="I have an account" class="auth-form__account-btn"
                @click="isNewUser = false">
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from '../UI/Buttons/PrimaryButton.vue';
import SignInBody from './SignInAuthFormBody.vue';
import SignUpBody from './SignUpAuthFormBody.vue';

export default defineComponent({
    name: "auth-form",
    components: { PrimaryButton, SignInBody, SignUpBody },
    data() {
        return {
            isNewUser: true,
            isValidData: false,
            isCheckedSubscription: false,
        }
    },
    computed: {
        invalidPasswordMsg() {
            return 'The password must match at least 8 - 16 characters, must contain at least 1 uppercase and lowercase letter and one number, and can contain any of this special characters $ % # * & - .';
        },
        formName() {
            return this.isNewUser ? 'CREATE ACCOUNT' : 'SIGN IN TO ACCOUNT';
        },
        submitTitle() {
            return this.isNewUser ? 'SIGN UP' : 'SIGN IN';
        }
    },
    methods: {
        closeForm() {

        },
        submitForm() {

        },
    }
})
</script>

<style scoped>

</style>