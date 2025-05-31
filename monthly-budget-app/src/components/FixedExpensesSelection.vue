<template>
    <div v-if="userData" class="flex flex-col gap-6 w-full max-w-96 bg-card-light p-8 rounded">
        <span class="text-3xl text-main-dark-base">Optionals</span>
        <div class="border-t-2 border-dotted border-main-dark-main-10" />
        <div class="flex flex-col gap-8 bg-box-color-light p-3 rounded">
            <span class="text-sm font-bold text-main-dark-base">CHOSE ANY FIXED EXPENSES</span>
            <div class="flex flex-col gap-5">
                <div v-for="(expense, index) in FixedExpenses" :key="index"
                    class="flex justify-between items-center w-full">
                    <div class="flex items-center gap-2">
                        <Avatar :name="expense.name" :image="expense.image" />
                        <span class="text-sm text-black">{{ expense.name }}</span>
                    </div>
                    <Badge @click="addFixedExpense(expense)">select</Badge>
                </div>
            </div>
        </div>
        <div class="border-t-2 border-dotted border-main-dark-main-10" />
        <div class="flex flex-col gap-4">
            <span class="text-3xl text-black">Goals</span>
            <div class="border-l-5 border-compl-opt-2 text-left pl-2 text-sm text-black font-semibold line-clamp-3"> {{
                userData.goal
                }}</div>
        </div>
    </div>

    <p v-else class="text-center text-gray-500 mt-10">No user data available.</p>
</template>

<script lang="ts" setup>
import { useExpenses } from '@/composables/useExpenses';
import { useUserData } from '@/composables/useUserData';
import { FixedExpenses } from '@/constants/expenses';
import type { FixedExpense } from '@/types/Expense';
import Avatar from './ui/Avatar.vue';
import Badge from './ui/Badge.vue';

const { userData } = useUserData();
const { addExpense } = useExpenses();


function addFixedExpense(fixedExpense: FixedExpense) {
    const { image, ...expense } = fixedExpense;
    const newExpense = {
        ...expense,
        date: new Date().toISOString(),
    };
    addExpense(newExpense);
}

</script>
