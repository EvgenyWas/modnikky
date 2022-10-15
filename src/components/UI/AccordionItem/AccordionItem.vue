<template>
    <div class="accordion-item">
        <div class="accordion-item__header">
            <button 
                class="accordion-item__btn"
                @click="$emit('changeActiveItem')"
                :class="{
                    'accordion-item__btn--active': isActive
                }"
            ></button>
            <h4 class="accordion-item__title">
                {{ title }}
            </h4>
        </div>
        <Transition>
            <div 
                class="accordion-item__content"
                v-if="isActive"
            >
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'accordion-item',
    emits: ['changeActiveItem'],
    props: {
        title: {
            type: String,
            default: ''
        },
        isActive: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<style scoped></style>