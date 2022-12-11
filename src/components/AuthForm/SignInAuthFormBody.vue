<template>
  <input
    :value="email"
    type="email"
    name="email"
    class="auth-form__input"
    :class="{ 'auth-form__input--invalid': !isValidEmail }"
    placeholder="Email"
    @input="$emit('updateEmail', ($event.target as HTMLInputElement).value)"
  />
  <label
    v-show="!isValidEmail"
    v-text="invalidEmailMsg"
    for="email"
    class="auth-form__validation-label"
  ></label>
  <input
    :value="password"
    type="password"
    name="password"
    class="auth-form__input"
    :class="{ 'auth-form__input--invalid': !isValidPassword }"
    placeholder="Password"
    @input="$emit('updatePassword', ($event.target as HTMLInputElement).value)"
  />
  <label
    v-show="!isValidPassword"
    v-text="invalidPasswordMsg"
    for="password"
    class="auth-form__validation-label"
  ></label>
</template>

<script lang="ts">
import { validateEmail, validatePassword } from "@/utils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sign-in-body",
  emits: ["updateEmail", "updatePassword"],
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
      default: "Your email is invalid...",
    },
    invalidPasswordMsg: {
      type: String,
      default: "Invaild password",
    },
  },
  data() {
    return {
      isValidEmail: true,
      isValidPassword: true,
    };
  },
  watch: {
    email(newEmail) {
      if (validateEmail(newEmail) || newEmail === "") {
        this.isValidEmail = true;
      } else {
        this.isValidEmail = false;
      }
    },
    password(newPassword) {
      if (validatePassword(newPassword) || newPassword === "") {
        this.isValidPassword = true;
      } else {
        this.isValidPassword = false;
      }
    },
  },
});
</script>

<style scoped></style>
