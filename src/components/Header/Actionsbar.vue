<template>
    <div class="actionsbar">
        <div class="actionsbar__search" @click="sortingOptions.setActiveSearch">
            <img class="actionsbar__icon" src="@/assets/icons/search-icon.svg" alt="Search">
            <p v-text="'SEARCH'" class="actionsbar__title"></p>
        </div>
        <div class="actionsbar__auth">
            <p v-if="isAuthorized" v-text="'SIGN OUT'" class="actionsbar__title" @click="signOut"></p>
            <RouterLink v-else v-text="'SIGN IN'" to="/authentication" class="actionsbar__title"></RouterLink>
        </div>
        <div class="actionsbar__bag" @click="$router.push('/bag')">
            <img class="actionsbar__icon actionsbar__icon--bag" src="@/assets/icons/shopping-cart-icon.svg"
                alt="Shopping cart">
            <p v-text="'BAG'" class="actionsbar__title"></p>
            <span v-text="`(${getBagAmount})`" :class="{ 'actionsbar__bag-amount--active': getBagAmount }"
                class="actionsbar__bag-amount"></span>
        </div>
        <div class="actionsbar__wishlist" @click="$router.push('/wishlist')">
            <img class="actionsbar__icon" src="@/assets/icons/wishlist-icon.svg" alt="Wish list">
        </div>
    </div>
</template>

<script lang="ts">
import { useAuth } from '@/composables';
import { useBagStore } from '@/stores/useBagStore';
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'actionsbar',
    data() {
        return { isAuth: true }
    },
    setup() {
        const { getBagAmount } = storeToRefs(useBagStore());
        const sortingOptions = useSortingOptionsStore();
        const auth = useAuth();

        return {
            getBagAmount,
            sortingOptions,
            auth
        }
    },
    computed: {
        isAuthorized() {
            return this.$route.meta.isAuth && this.isAuth;
        }
    },
    methods: {
        signOut() {
            this.auth.signOut();
            this.isAuth = false;
        }
    },
})
</script>

<style scoped>

</style>