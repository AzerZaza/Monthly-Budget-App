<template>
    <div class="relative w-full" @click="openPicker" style="cursor:pointer;">
        <input type="text" :value="formattedDate" readonly placeholder="23/2/2024"
            class="w-full text-3xl text-center px-2 py-4 border-b-2 border-white placeholder-gray-400 bg-transparent" />

        <input ref="hiddenDate" type="date" v-model="rawDate" required class="absolute top-0 left-0 w-full h-full opacity-0"
            @change="onDateChange" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

const rawDate = ref(props.modelValue || '')

const hiddenDate = ref<HTMLInputElement | null>(null)

watch(() => props.modelValue, (newVal) => {
    if (newVal !== rawDate.value) {
        rawDate.value = newVal || ''
    }
})

const openPicker = () => {
    if (hiddenDate.value?.showPicker) {
        hiddenDate.value.showPicker()
    } else {
        hiddenDate.value?.focus()
    }
}

const formattedDate = computed(() => {
    if (!rawDate.value) return ''
    const [year, month, day] = rawDate.value.split('-')
    return `${parseInt(day)}/${parseInt(month)}/${year}`
})

const onDateChange = (e: Event) => {
    const newVal = (e.target as HTMLInputElement).value
    rawDate.value = newVal
    emit('update:modelValue', newVal)
}
</script>
