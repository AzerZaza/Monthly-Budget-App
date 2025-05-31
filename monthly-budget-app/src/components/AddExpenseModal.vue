<template>
    <div>
        <Button @click="openNewExpenseModal" class="hidden sm:block">
            New Expense
        </Button>

        <Button @click="openNewExpenseModal"
            class="sm:hidden w-12 h-12 rounded-full flex items-center justify-center">
            +
        </Button>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="fixed inset-0 bg-black opacity-80"></div>
            <div class="flex flex-col gap-2 bg-main-dark-base p-10 rounded-lg max-w-md w-full space-y-4 z-10">
                <span class="text-4xl text-box-color-light">
                    {{ isEditing ? 'Edit Expense' : 'New Expense' }}
                </span>

                <form @submit.prevent="handleSubmit" class="space-y-3">
                    <div class="flex flex-col gap-4">
                        <Input v-model="form.name" required pattern="[A-Za-z\s]+" placeholder="Name" />
                        <CategorySelect v-model="form.category" />
                        <DatePicker v-model="form.date" required type="date" placeholder="Date" />
                        <Input v-model="amountInput" @input="onInput" required type="text" placeholder="Amount" />

                        <div class="flex flex-col w-full gap-4 mt-4">
                            <Button type="submit" class="btn-primary">
                                {{ isEditing ? 'Save Changes' : 'Add Expense' }}
                            </Button>
                            <Button type="button" @click="resetModal" class="btn-secondary">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useExpenses } from '@/composables/useExpenses';
import type { Expense } from '@/types/Expense';
import { reactive, ref, watch } from 'vue';
import CategorySelect from './CategorySelect.vue';
import Button from './ui/Button.vue';
import DatePicker from './ui/DatePicker.vue';
import Input from './ui/Input.vue';

const props = defineProps<{
    selectedExpense?: Expense | null;
}>();

const emit = defineEmits(['close', 'saved']);

const showModal = ref(false);
const isEditing = ref(false);

const { addExpense, editExpense } = useExpenses();

const form = reactive<Omit<Expense, 'id'> & { id?: string }>({
    name: '',
    amount: '',
    category: {
        name: '',
        image: ''
    },
    date: '',
    id: undefined,
});

const amountInput = ref('');

function onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let val = input.value;

    val = val.replace(/[^0-9,]/g, '');

    const parts = val.split(',');
    if (parts.length > 2) {
        val = parts[0] + ',' + parts.slice(1).join('');
    }

    input.value = val;
    amountInput.value = val;

    const parsed = parseFloat(val.replace(',', '.'));
    form.amount = isNaN(parsed) ? 0 : parsed;
}

watch(() => form.amount, (val) => {
    amountInput.value = val.toString().replace('.', ',');
});

function openNewExpenseModal() {
    resetModal();
    showModal.value = true;
}

watch(
    () => props.selectedExpense,
    (newVal) => {
        if (newVal) {
            Object.assign(form, newVal);
            isEditing.value = true;
            showModal.value = true;
        }
    },
    { immediate: true }
);

function resetModal() {
    showModal.value = false;
    isEditing.value = false;
    Object.assign(form, {
        name: '',
        amount: '',
        category: {
            name: '',
            image: ''
        },
        date: '',
        id: undefined
    });
    emit('close');
}

function handleSubmit() {
    if (isEditing.value && form.id) {
        editExpense({ ...form } as Expense);
    } else {
        const { id, ...newData } = form;
        addExpense(newData);
    }

    emit('saved');
    resetModal();
}
</script>
