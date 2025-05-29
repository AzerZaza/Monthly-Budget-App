<template>
    <div class="bg-main-dark-base flex gap-10 justify-center items-center">
        <div class="flex-1 bg-amber-100">
            <img class="w-full h-screen object-contain" :src="LandingPageImage" alt="Landing page" />
        </div>
        <LandingForm />
    </div>
</template>

<script lang="ts" setup>
import LandingForm from '@/components/LandingForm.vue';
</script>
