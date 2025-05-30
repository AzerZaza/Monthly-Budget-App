<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col gap-6 w-full p-2">
            <div class="flex justify-between"><span class="text-compl-opt-1">Description</span>

            </div>

        </div>
        <div v-if="expenses">
            <div v-for="filter in expenses" :key="filter.name" class="flex items-center space-x-2">

                <span>{{ filter.name }}</span>
            </div>
        </div>
        <div v-else class="flex justify-center items-center flex-col gap-8 w-full h-full">
            <div class="text-box-color-light text-4xl font-bold">Looks Like You
                Haven't <span class="flex gap-2">Added Any<span class="text-compl-opt-2">Expenses
                        Yet.</span></span></div>
            <div class="text-xl text-box-color-light max-w-3/6">
                No Worries, Just Hit The <span class="text-compl-opt-2">'Add'</span> Button
                To Get Started
            </div>
            <img :src="Cart" alt="Money off" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useExpenses } from '@/composables/useExpenses';
import Cart from '../assets/Cart.png';

const { expenses } = useExpenses();


</script>
