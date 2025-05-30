<template>
    <div v-if="userData" class="max-w-md mx-auto mt-10 p-6 bg-card-light rounded shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">User Summary</h2>
        <p class="mb-3"><span class="font-semibold text-gray-700">Name:</span> {{ userData?.name }}</p>
        <p class="mb-3"><span class="font-semibold text-gray-700">Income:</span> ${{ userData?.income?.toFixed(2) }}</p>
        <p><span class="font-semibold text-gray-700">Financial Goal:</span> {{ userData?.goal }}</p>
    </div>
    <p v-else class="text-center text-gray-500 mt-10">No user data available.</p>
</template>

<script lang="ts" setup>
import { useUserData } from '@/composables/useUserData';

const { userData } = useUserData();
</script>
