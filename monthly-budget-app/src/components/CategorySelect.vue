<template>
    <div class="relative w-full flex items-center">
        <select v-model="selectedName" @change="updateSelectedCategory" required :class="[
            'appearance-none w-full text-3xl text-center px-2 py-4 border-b-2 focus:outline-none border-white bg-transparent',
            selectedName === '' && 'text-main-dark-main-20']">
            <option class="text-gray-400" disabled hidden value="">Category</option>
            <option v-for="category in ExpensesFilters" :key="category.name" :value="category.name">
                {{ category.name }}
            </option>
        </select>
        <img v-if="selectedIcon" :src="selectedIcon" class="w-9 h-9 absolute left-3 top-4" alt="Category icon" />
    </div>
</template>

<script setup lang="ts">
import { ExpensesFilters } from '@/constants/filters';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    modelValue: { name: string; image: string }
}>()

const emit = defineEmits<(e: 'update:modelValue', value: { name: string; image: string }) => void>()

const selectedName = ref(props.modelValue?.name || '')

watch(
    () => props.modelValue,
    (val) => {
        selectedName.value = val?.name || ''
    }
)

const selectedIcon = computed(() => {
    return ExpensesFilters.find((c) => c.name === selectedName.value)?.image
})

const updateSelectedCategory = () => {
    const category = ExpensesFilters.find((c) => c.name === selectedName.value)
    if (category) emit('update:modelValue', category)
}
</script>
