<template>
    <div @click.stop="onSelect" :class="[
        'flex justify-between items-center py-5 border-t-2 border-dotted',
        selected ? 'cursor-default' : 'border-main-dark-main-10 cursor-pointer',
    ]">
        <div class="flex items-center">
            <img :src="expense.category.image" alt="Category" class="w-12 h-12 xl:w-13 xl:h-13 rounded-full object-cover mr-4" />
            <div class="flex flex-col text-left text-box-color-light">
                <span class="text-base xl:text-xl">{{ expense.name }}</span>
                <span class="flex gap-2 text-sm xl:text-base">
                    Date:
                    <span class="font-bold">{{ formattedDate }}</span>
                </span>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <span class="text-2xl xl:text-3xl text-box-color-light">{{ formattedAmount }}</span>
        </div>

    </div>
    <div v-if="selected" class="width-full flex gap-8 justify-center items-center p-6 xl:p-8 bg-box-color-light">
        <button @click.stop="onEdit"
            class="flex gap-1 items-center text-compl-opt-2 hover:underline text-base xl:text-lg font-semibold cursor-pointer"
            title="Edit Expense">
            <img :src="EditIcon" alt="Edit" class="w-5 h-5 xl:w-7 xl:h-7" /> Edit
        </button>
        <button @click.stop="onDelete"
            class="flex gap-1 items-center text-error hover:underline text-base xl:text-lg font-semibold cursor-pointer"
            title="Delete">
            <img :src="DeleteIcon" alt="Delete" class="w-5 h-5 xl:w-7 xl:h-7" /> Delete
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Expense } from '@/types/Expense';
import { computed } from 'vue';
import DeleteIcon from '../assets/icons/Delete.png';
import EditIcon from '../assets/icons/Edit.png';

const emit = defineEmits(['select', 'edit', 'delete']);

function onSelect() {
    emit('select', props.expense);
}

function onEdit() {
    emit('edit', props.expense);
}

function onDelete() {
    emit('delete', props.expense);
}

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
