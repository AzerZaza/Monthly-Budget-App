<template>
    <div class="flex gap-10 justify-center items-center">
        <div class="flex-1 bg-box-color-light rounded-md">
            <img class="w-full max-h-screen object-contain" :src="LandingPageImage" alt="Landing page" />
        </div>
        <LandingForm />
    </div>
</template>

<script lang="ts" setup>
import LandingForm from '@/components/LandingForm.vue';
import LandingPageImage from '../assets/LandingPage.png';
</script>
