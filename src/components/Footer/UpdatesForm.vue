<template>
    <form class="updates-form" @submit.prevent>
        <label for="email" class="updates-form__label">
            <h4 class="updates-form__title">
                SIGN UP FOR UPDATES
            </h4>
            <p class="updates-form__subtitle">
                Sign up for exclusive early sale access and tailored new arrivals.
            </p>
        </label>
        <div class="updates-form__group" :class="{
            'updates-form__group--incorrect': !isCorrectEmail,
            'updates-form__group--focused': isFocused,
        }" v-if="!loading && !response?.message">
            <input v-model="email" type="email" name="email" class="updates-form__input"
                placeholder="Your email address" ref="elemRef">
            <button class="updates-form__btn" @click="sendEmailForUpdates">
                JOIN
            </button>
        </div>
        <ring-loader v-else-if="loading" />
        <h2 class="updates-form__message" v-show="response?.message">
            {{ response?.message }}!
        </h2>
    </form>
</template>

<script lang="ts">
import storeApi from '@/api/storeApi';
import useApi from '@/hooks/useApi';
import { useFocusedElemFlag } from '@/hooks/useFocusedElemFlag';
import { validateEmail } from '@/utils/utils';
import { defineComponent } from 'vue';
import RingLoader from '../UI/Loaders/RingLoader.vue';

export default defineComponent({
    components: { RingLoader },
    name: 'updates-form',
    data() {
        return {
            email: '',
            isCorrectEmail: true,
        }
    },
    methods: {
        sendEmailForUpdates() {
            if (this.isCorrectEmail && this.email !== '') {
                this.postEmail({ email: this.email });
            }
        }
    },
    watch: {
        email(newEmail) {
            if (validateEmail(newEmail) || newEmail === '') {
                this.isCorrectEmail = true;
            } else {
                this.isCorrectEmail = false;
            }
        }
    },
    setup() {
        const [postEmail, response, loading, error] = useApi(storeApi.postSubscription);
        const { elemRef, isFocused } = useFocusedElemFlag();

        return {
            postEmail,
            response,
            loading,
            error,
            elemRef,
            isFocused
        }
    }
})
</script>

<style scoped>

</style>