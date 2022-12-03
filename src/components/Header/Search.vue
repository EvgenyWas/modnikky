<template>
    <div class="search">
        <div class="search__container" :class="{ 'search__container--active': isSearchActive }">
            <form :class="{ 'search__form--focused': isFocused }" class="search__form" @submit.prevent name="search">
                <input type="button" class="search__btn-close" @click="sortingOptions.setInactiveSearch">
                <input v-model.trim="inputModel" type="text" class="search__input" placeholder="ENTER SEARCH TERMS"
                    ref="elemRef">
                <input type="button" class="search__btn-search" :class="{ 'search__btn-search--active': true }"
                    @click="handleSubmit">
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { SORTING_OPTIONS } from '@/config';
import { useFocusedElemFlag, useWindowDimensions } from '@/composables';
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { getWindowSearchParams, pushParamsToWindowHistory } from '@/utils';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'app-search',
    setup() {
        const sortingOptions = useSortingOptionsStore();
        const windowDimensions = useWindowDimensions();
        const inputModel = ref<string>('');
        const isSearchActive = computed(() => sortingOptions.getIsSearchActive);
        const { elemRef, isFocused } = useFocusedElemFlag();

        return {
            sortingOptions,
            windowDimensions,
            isSearchActive,
            elemRef,
            inputModel,
            isFocused
        }
    },
    created() {
        const searchParams = getWindowSearchParams();
        const searchValue = searchParams.search;

        if (searchValue) {
            this.sortingOptions.setSearch(searchValue);
            this.inputModel = searchValue;
        };
    },
    mounted() {
        window.addEventListener('keydown', this.searchEventHandler);
    },
    unmounted() {
        window.removeEventListener('keydown', this.searchEventHandler);
    },
    methods: {
        handleSubmit() {
            if (this.inputModel || getWindowSearchParams()[SORTING_OPTIONS.SEARCH]) {
                // Set input value to store and window history
                this.sortingOptions.setSearch(this.inputModel);
                pushParamsToWindowHistory(SORTING_OPTIONS.SEARCH, this.inputModel);
                // Close search
                this.sortingOptions.setInactiveSearch();
                // Scroll to content
                window.scrollBy(0, this.windowDimensions.height);
            };
        },
        searchEventHandler(event: KeyboardEvent) {
            if (!this.sortingOptions.getIsSearchActive) return;

            if (event.key === 'Enter') {
                this.handleSubmit();
            };

            if (event.key === 'Escape') {
                this.sortingOptions.setInactiveSearch();
            };
        }
    }
})
</script>

<style scoped>

</style>