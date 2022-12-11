<template>
    <form class="auth-form" @submit.prevent>
        <div class="auth-form__header">
            <label v-text="formName" for="close-btn" class="auth-form__name"></label>
            <input type="button" name="close-btn" class="auth-form__close-btn" @click="closeForm">
        </div>
        <div class="auth-form__body">
            <sign-up-body v-if="isNewUser" v-model:first-name="firstName" v-model:last-name="lastName"
                v-model:email="email" v-model:password="password" :invalid-password-msg="invalidPasswordMsg"
                @check-subscription="checkSubscription" />
            <sign-in-body v-else v-model:email="email" v-model:password="password" />
        </div>
        <div class="auth-form__footer">
            <primary-button :title="submitTitle" dark-mode @click="submitForm" />
            <input v-show="isNewUser" type="button" value="I have an account" class="auth-form__account-btn"
                @click="isNewUser = false">
        </div>
    </form>
</template>

<script lang="ts">
import storeApi from '@/api/storeApi';
import { COOKIES, SUBSCRIPTION_EXPIRATION_DAYS } from '@/config';
import { useApi, useAuth } from '@/composables';
import { getFutureDateInDays, setCookie, validateEmail, validatePassword } from '@/utils';
import { defineComponent, nextTick } from 'vue';
import PrimaryButton from '../UI/Buttons/PrimaryButton.vue';
import SignInBody from './SignInAuthFormBody.vue';
import SignUpBody from './SignUpAuthFormBody.vue';

export default defineComponent({
    name: "auth-form",
    components: { PrimaryButton, SignInBody, SignUpBody },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isNewUser: true,
            isCheckedSubscription: false,
        }
    },
    setup() {
        const [postEmail] = useApi(storeApi.postSubscription);
        const auth = useAuth();

        return {
            postEmail,
            auth
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
        },
        isValidData() {
            const isCorrectFirstName = this.firstName.length > 1;
            const isCorrectLastName = this.lastName.length > 1;
            const isValidEmail = Boolean(validateEmail(this.email));
            const isValidPassword = Boolean(validatePassword(this.password));

            return !this.isNewUser || (isCorrectFirstName && isCorrectLastName) && isValidEmail && isValidPassword;
        }
    },
    methods: {
        closeForm() {
            this.$router.go(-1);
        },
        submitForm() {
            if (this.isValidData) {
                if (this.isNewUser) {
                    this.auth.signUp({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                    });

                    if (this.isCheckedSubscription) {
                        this.postEmail({ email: this.email });
                        setCookie(
                            COOKIES.SUBSCRIPTION,
                            'true',
                            { expires: getFutureDateInDays(SUBSCRIPTION_EXPIRATION_DAYS) }
                        );
                    }

                    this.$router.go(-1);
                } else {
                    this.auth.signIn(this.email, this.password);
                    nextTick(() => {
                        if (this.auth.isCorrectCredentials) {
                            this.$router.go(-1);
                        }
                    })
                }
            }
        },
        checkSubscription() {
            this.isCheckedSubscription = !this.isCheckedSubscription;
        },
    },
})
</script>

<style scoped>

</style>