<template>
    <div class="flex flex-col gap-4 h-full">
        <div class="flex flex-col gap-6 w-full p-2">
            <div class="flex justify-between">
                <span class="text-compl-opt-1">Description</span>
                <select v-model="selectedCategory" class="p-2 border rounded">
                    <option value="">All</option>
                    <option v-for="category in ExpensesFilters" :key="category.name" :value="category.name">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>

        <div class="flex flex-col overflow-scroll" v-if="filteredExpenses.length > 0">
            <ExpenseItem v-for="expense in filteredExpenses" :key="expense.id" :expense="expense"
                :selected="selectedExpense?.id === expense.id" @select="handleSelect(expense)"
                @edit="triggerEdit(expense)" @delete="deleteSelectedExpense(expense.id)" />
        </div>

        <div v-else class="flex justify-center items-center flex-col gap-8 w-full h-full">
            <div class="text-box-color-light text-4xl font-bold">
                Looks Like You Haven't <span class="flex gap-2">Added Any
                    <span class="text-compl-opt-2">Expenses Yet.</span>
                </span>
            </div>
            <div class="text-xl text-box-color-light max-w-3/6">
                No Worries, Just Hit The <span class="text-compl-opt-2">'Add'</span> Button To Get Started
            </div>
            <img :src="Cart" alt="Cart" />
        </div>

        <AddExpenseModal v-if="modalVisible" :selectedExpense="selectedExpense" @close="modalVisible = false"
            @saved="onModalSaved" />
    </div>
</template>

<script setup lang="ts">
import { useExpenses } from '@/composables/useExpenses';
import { ExpensesFilters } from '@/constants/filters';
import type { Expense } from '@/types/Expense';
import { ref } from 'vue';
import Cart from '../assets/Cart.png';
import AddExpenseModal from './AddExpenseModal.vue';
import ExpenseItem from './ExpenseItem.vue';

const { filteredExpenses, selectedCategory, deleteExpense } = useExpenses();

const selectedExpense = ref<Expense | null>(null);
const modalVisible = ref(false);

function handleSelect(expense: Expense) {
    selectedExpense.value = selectedExpense.value?.id === expense.id ? null : expense;
}

function triggerEdit(expense: Expense) {
    selectedExpense.value = expense;
    modalVisible.value = true;
}

function deleteSelectedExpense(id: string) {
    deleteExpense(id);
    if (selectedExpense.value?.id === id) selectedExpense.value = null;
}

function onModalSaved() {
    modalVisible.value = false;
    selectedExpense.value = null;
}
</script>
