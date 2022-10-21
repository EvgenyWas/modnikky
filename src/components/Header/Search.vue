<template>
    <div class="search">
        <div class="search__container" :class="{ 'search__container--active': isSearchActive }">
            <form @submit.prevent name="search" class="search__form">
                <input type="button" class="search__btn-close" @click="sortingOptions.setInactiveSearch">
                <input type="text" class="search__input" placeholder="ENTER SEARCH TERMS" v-model.trim="inputRef">
                <input type="button" class="search__btn-search" :class="{'search__btn-search--active': true}"
                    @click="handleSubmit">
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { defineComponent, ref, computed } from 'vue';
import { getWindowSearchParams, pushParamsToWindowHistory } from '@/utils/utils';
import { ESortingOptions } from '@/config';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export default defineComponent({
    name: 'app-search',
    setup() {
        const sortingOptions = useSortingOptionsStore();
        const windowDimensions = useWindowDimensions();
        const inputRef = ref<string>('');
        const isSearchActive = computed(() => sortingOptions.getIsSearchActive);

        return {
            sortingOptions,
            windowDimensions,
            isSearchActive,
            inputRef
        }
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
                // Set input value to store and window history
                this.sortingOptions.setSearch(this.inputRef);
                pushParamsToWindowHistory(ESortingOptions.SEARCH, this.inputRef);
                // Close search
                this.sortingOptions.setInactiveSearch();
                // Scroll to content
                window.scrollBy(0, this.windowDimensions.height);
            };
        }
    }
})
</script>

<style scoped>

</style>