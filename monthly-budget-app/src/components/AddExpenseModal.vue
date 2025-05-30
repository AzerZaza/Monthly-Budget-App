<template>
    <div>

        <Button @click="showModal = true">
            New Expense
        </Button>


        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
            <div class="bg-main-dark-base p-6 rounded-lg max-w-md w-full space-y-4">
                <h2 class="text-xl font-bold">Add New Expense</h2>

                <form @submit.prevent="handleSubmit" class="space-y-3">
                    <Input v-model="form.name" required placeholder="Name" />
                    <Input v-model="form.category" required placeholder="Category" />
                    <Input v-model="form.date" required type="date" placeholder="Date" />
                    <Input v-model="form.amount" required type="number" min="0" placeholder="Amount" />
                    <div class="flex justify-end space-x-2">
                        <Button type="button" @click="resetModal" class="btn-secondary">Cancel</Button>
                        <Button type="submit" class="btn-primary">Save</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';

const showModal = ref(false);

const form = reactive({
    name: '',
    amount: '',
    category: '',
    date: '',
});

function resetModal() {
    showModal.value = false;
    Object.assign(form, {
        name: '',
        amount: '',
        category: '',
        date: '',
    });
}

function handleSubmit() {
    const existing = JSON.parse(localStorage.getItem('expenses') || '[]');
    const newExpense = { ...form };
    localStorage.setItem('expenses', JSON.stringify([...existing, newExpense]));
    resetModal();
}
</script>
