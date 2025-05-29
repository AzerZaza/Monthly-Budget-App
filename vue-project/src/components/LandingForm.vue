<template>
    <div class="flex flex-col flex-1 justify-center items-center">
        <h1 class="text-2xl font-bold">Monthly <span class="text-green-500">Budget</span></h1>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-8 w-8/12">

            <input id="income" v-model="form.income" type="number" placeholder="'Insert Your Income'" required
                class="input text-center px-2 py-4 border-b border-white" />


            <input id="name" v-model.number="form.name" type="text" placeholder="Insert your name" min="0" required
                class="input text-center px-2 py-4 border-b border-white" />


            <input id="goal" v-model="form.goal" type="text" placeholder="Insert Your Goals" required
                class="input text-center px-2 py-4 border-b border-white" />

            <button type="submit" class="bg-yellow-100 cursor-pointer rounded-md text-black p-2">
                Start Your Calculation
            </button>
        </form>
    </div>

</template>

<script lang="ts" setup>
import { useUserData } from '@/composables/useUserData';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { setUserData, userData } = useUserData();

const form = reactive({
    name: '',
    income: 0,
    goal: ''
});

onMounted(() => {
    if (userData.value.name) form.name = userData.value.name;
    if (userData.value.income) form.income = userData.value.income;
    if (userData.value.goal) form.goal = userData.value.goal;
});

function handleSubmit() {
    setUserData({ ...form });
    router.push('/home');
}
</script>
