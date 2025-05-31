<template>
  <input
    :value="modelValue"
    @input="onInput"
    v-bind="attrs"
    class="text-3xl text-center px-2 py-4 border-b-2 focus-visible:outline-none border-white placeholder:text-main-dark-main-20"
  />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();

defineProps<{
  modelValue: string | number | null;
}>();

const emit = defineEmits<(e: 'update:modelValue', value: string | number) => void>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>
