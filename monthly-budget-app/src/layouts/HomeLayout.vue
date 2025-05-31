<template>
  <div class="max-w-[1440px] mx-auto h-full flex flex-col gap-12">
    <div class="flex justify-between border-b-1 py-4 border-b-box-color-light">
      <div class="flex items-center gap-2">
        <img :src="MoneyOff" alt="Money off" />
        <div class="flex flex-col items-start">
          <span class="text-compl-opt-1 text-xl">Expenses</span>
          <span class="text-6xl font-extrabold"><span class="text-box-color-light">Monthly</span> <span
              class="text-compl-opt-2">Budget</span></span>
        </div>
      </div>
      <div class="flex items-center gap-4 overflow-hidden">
        <AddExpenseModal />
        <div @click="goHome" class="flex items-center gap-2 hover:underline cursor-pointer">
          <img :src="User" alt="User" />
          {{ userData.name }}
        </div>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script lang="ts" setup>
import AddExpenseModal from '@/components/AddExpenseModal.vue';
import { useUserData } from '@/composables/useUserData';
import { useRouter } from 'vue-router';
import MoneyOff from '../assets/MoneyOff.png';
import User from '../assets/User.svg';

const { userData } = useUserData();
const router = useRouter();

const goHome = () => {
  router.push('/');
};

</script>