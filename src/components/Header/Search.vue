<template>
    <div class="search">
        <div class="search__container" :class="{ 'search__container--active': true }">
            <form @submit.prevent name="search" class="search__form">
                <input type="button" class="search__btn-close">
                <input type="text" class="search__input" placeholder="ENTER SEARCH TERMS" v-model.trim="inputRef">
                <input type="button" class="search__btn-search" :class="{'search__btn-search--active': true}"
                    @click="handleSubmit">
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { defineComponent, ref } from 'vue';
import { getWindowSearchParams, pushParamsToWindowHistory } from '@/utils/utils';
import { ESortingOptions } from '@/config';

export default defineComponent({
    name: 'app-search',
    setup() {
        const sortingOptions = useSortingOptionsStore();
        const inputRef = ref<string>('');

        return {
            sortingOptions,
            inputRef
        }
    },
    computed: {
        isSearchActive() {
            const searchParams = getWindowSearchParams();
            const keyword = 'search';
            const hasKeyword = keyword in searchParams;
            console.log(hasKeyword);

            return hasKeyword;
        },
    },
    created() {
        const searchParams = getWindowSearchParams();
        const searchValue = searchParams.search;

        if (searchValue) {
            this.sortingOptions.setSearch(searchValue);
            this.inputRef = searchValue;
        };
    },
    methods: {
        handleSubmit() {
            if (this.inputRef || getWindowSearchParams()[ESortingOptions.SEARCH]) {
                this.sortingOptions.setSearch(this.inputRef.trim());
                pushParamsToWindowHistory(ESortingOptions.SEARCH, this.inputRef.trim());
            };
        }
    }
})
</script>

<style scoped>

</style>