<template>
    <div class="relative w-58 h-58">
        <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
            <circle class="text-gray-200" cx="50" cy="50" r="45" stroke-width="10" fill="transparent"
                stroke="currentColor" />

            <circle :class="colorClass" cx="50" cy="50" r="45" stroke-width="10" fill="transparent"
                stroke-dasharray="282.6" :stroke-dashoffset="dashOffset" stroke="currentColor"
                style="transition: stroke-dashoffset 0.8s ease-out;" />
        </svg>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-black">
            <span class="text-4xl">{{ percent }}%</span>
            <span class="text-xl">Spent</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    value: number | null
    max: number | null
    color?: 'green' | 'yellow' | 'red'
}

const props = defineProps<Props>()

const percent = computed(() => {
    const value = props.value ?? 0
    const max = props.max ?? 0
    if (max <= 0) return 0
    return Math.min(100, Math.round((value / max) * 100))
})

const dashOffset = computed(() => 282.6 - (282.6 * percent.value) / 100)

const colorClass = computed(() => {
    switch (props.color) {
        case 'yellow':
            return 'text-yellow-400'
        case 'red':
            return 'text-red-500'
        default:
            return 'text-compl-opt-2'
    }
})
</script>
