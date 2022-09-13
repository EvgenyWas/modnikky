<template>
    <form 
        class="updates-form"
        @submit.prevent
    >
        <label 
            for="email"
            class="updates-form__label"
        >
            <h4 class="updates-form__title">
                SIGN UP FOR UPDATES
            </h4>
            <p class="updates-form__subtitle">
                Sign up for exclusive early sale access and tailored new arrivals.
            </p>
        </label>
        <div 
            class="updates-form__group"
            :class="{ 
                'updates-form__group--incorrect': !isCorrectEmail
            }"
        >
            <input 
                type="email"
                name="email"
                class="updates-form__input"
                placeholder="Your email address"
                v-model="email"
            >
            <button 
                class="updates-form__btn"
                @click="sendEmailForUpdates"
            >
                JOIN
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import { validateEmail } from '@/utils/utils';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'updates-form',
    data() {
        return {
            email: '',
            isCorrectEmail: true,
        }
    },
    methods: {
        sendEmailForUpdates() {
            if (this.isCorrectEmail) {
                
            }
        }
    },
    watch: {
        email(newEmail) {
            console.log('hi!')
            if (validateEmail(newEmail) || newEmail === '') {
                this.isCorrectEmail = true;
            } else {
                this.isCorrectEmail = false;
            }
        }
    },
})
</script>

<style scoped>

</style>