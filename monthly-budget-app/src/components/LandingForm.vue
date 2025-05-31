<template>
    <div class="flex flex-col gap-8 flex-1 justify-center items-center">
        <span class="text-6xl"><span class="text-box-color-light">Monthly</span> <span
                class="text-compl-opt-2">Budget</span></span>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-12 min-w-10/12 xl:w-8/12">
            <div class="flex flex-col gap-2">
                <Input id="income" v-model.number="form.income" type="number" placeholder="Insert Your Income"
                    required />
                <Input id="name" v-model.number="form.name" type="text" placeholder="Insert your name" min="0"
                    required />
                <Input id="goal" v-model.number="form.goal" type="text" placeholder="Insert Your Goals" required />
            </div>
            <Button>
                Start Your Calculation
            </Button>
        </form>
    </div>

</template>

<script lang="ts" setup>
import { useUserData } from '@/composables/useUserData';
import type { UserData } from '@/types/User';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';

const router = useRouter();
const { setUserData, userData } = useUserData();

const form = reactive<UserData>({
    name: '',
    income: null,
    goal: '',
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
