<template>
    <div @click="$emit('select')" :class="[
        'flex justify-between items-center py-5 border-t-2 border-dotted',
        selected ? 'cursor-default' : 'border-main-dark-main-10 cursor-pointer',
    ]">
        <div class="flex items-center">
            <img :src="expense.category.image" alt="Category" class="w-13 h-13 rounded-full object-cover mr-4" />
            <div class="flex flex-col text-left text-box-color-light">
                <span class="text-xl">{{ expense.name }}</span>
                <span class="flex gap-2 text-base">
                    Date:
                    <span class="font-bold">{{ formattedDate }}</span>
                </span>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <span class="text-3xl text-box-color-light">{{ formattedAmount }}</span>
        </div>

    </div>
    <div v-if="selected" class="width-full flex gap-8 justify-center items-center p-8 bg-box-color-light">
        <button @click.stop="$emit('edit')"
            class="flex gap-1 items-center text-compl-opt-2 hover:underline text-lg font-semibold cursor-pointer" title="Edit Expense">
            <img :src="EditIcon" alt="Edit" class="w-7 h-7" /> Edit
        </button>
        <button @click.stop="$emit('delete')" class="flex gap-1 items-center text-error hover:underline text-lg font-semibold cursor-pointer"
            title="Delete">
            <img :src="DeleteIcon" alt="Delete" class="w-7 h-7" /> Delete
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Expense } from '@/types/Expense';
import { computed } from 'vue';
import DeleteIcon from '../assets/icons/Delete.png';
import EditIcon from '../assets/icons/Edit.png';

const props = defineProps<{
    expense: Expense;
    selected: boolean;
}>();

const formattedAmount = computed(() =>
    new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(Number(props.expense.amount))
);

const formattedDate = computed(() =>
    new Date(props.expense.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
);
</script>
