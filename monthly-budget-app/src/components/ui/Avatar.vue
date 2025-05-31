<template>
  <div
    class="w-12 h-12 rounded-full bg-card-light flex items-center justify-center text-xl font-semibold text-gray-700 select-none overflow-hidden border-2 border-compl-opt-2"
  >
    <img v-if="image" :src="image" alt="avatar" class="w-full h-full object-cover" @error="onError" />
    <span v-else>{{ firstLetter }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  image?: string | null;
  name: string;
}
const props = defineProps<Props>();

const showImage = ref(true);

function onError() {
  showImage.value = false;
}

const firstLetter = computed(() => {
  return props.name?.charAt(0).toUpperCase() || '';
});
</script>
