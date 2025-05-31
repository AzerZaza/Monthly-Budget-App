<template>
    <div class="flex flex-col relative gap-6 w-full max-w-96 h-full bg-card-light p-6 pb-12 sm:pb-8 xl:p-8  rounded">
        <span class="text-3xl text-main-dark-base">Calculation</span>
        <div class="border-t-2 border-dotted border-main-dark-main-10" />
        <div class="flex flex-col gap-1 bg-box-color-light p-3 rounded">
            <span class="text-sm font-bold text-main-dark-base">INCOME</span>
            <span class="text-3xl text-main-dark-base">{{ formatGBP(userData?.income ?? 0) }}</span>
        </div>
        <CircleLoader :value="totalCost" :max="userData?.income" color="green" class="mx-auto" />
        <div class="flex gap-4">
            <div class="bg-main-dark-base flex-1 flex flex-col p-3 rounded">
                <span class="text-sm font-bold">AVAILABLE</span>
                <span class="text-compl-opt-2">{{ formatGBP(leftover) }}</span>
            </div>
            <div class="bg-main-dark-base flex-1 flex flex-col p-3 rounded">
                <span class="text-sm font-bold">SPENT</span>
                <span class="text-compl-opt-1">{{ formatGBP(totalCost) }}</span>
            </div>
        </div>
        <div class="border-t-2 border-dotted border-main-dark-main-10" />
        <Button @click="clearExpenses">Reset Expenses</Button>
        <AddExpenseModal class="absolute sm:hidden -right-3 -bottom-3"/>
    </div>
</template>

<script lang="ts" setup>
import { useExpenses } from '@/composables/useExpenses';
import { useUserData } from '@/composables/useUserData';
import { computed } from 'vue';
import AddExpenseModal from './AddExpenseModal.vue';
import CircleLoader from './CircleLoader.vue';
import Button from './ui/Button.vue';

const { userData } = useUserData();
const { totalCost, clearExpenses } = useExpenses();

const formatGBP = (value: number) =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(value);

const leftover = computed(() => {
    const income = Number(userData.value.income) || 0;
    const cost = Number(totalCost.value) || 0;
    return income - cost;
});


</script>
