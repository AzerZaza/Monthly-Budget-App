<template>
  <div class="max-w-[1440px] mx-auto h-full flex flex-col gap-12 p-4 sm:p-6">
    <div class="flex flex-col gap-2 xl:gap-0 py-4 border-b-1 border-b-box-color-light">
      <div class="flex justify-between   ">
        <div class="flex items-center gap-2">
          <img :src="MoneyOff" alt="Money off" class="w-12 h-13 sm:w-15 sm:h-16 xl:w-20 xl:h-21"/>
          <div class="flex flex-col items-start">
            <span class="text-compl-opt-1 text-sm xl:text-xl">Expenses</span>
            <span class="text-3xl sm:text-4xl xl:text-6xl xl:font-extrabold text-left"><span class="text-box-color-light">Monthly</span> <span
                class="text-compl-opt-2">Budget</span></span>
          </div>
        </div>
        <div class="flex items-center gap-4 overflow-hidden">
          <AddExpenseModal class="hidden sm:block" />
          <div @click="goHome" class=" hidden xl:flex items-center gap-2 hover:underline cursor-pointer font-semibold">
            <img :src="User" alt="User" />
            Welcome {{ userData.name }}
          </div>
        </div>

      </div>
      <div @click="goHome" class="flex pl-4 xl:hidden items-center gap-2 hover:underline cursor-pointer">
        <img :src="User" alt="User" />
        Welcome {{ userData.name }}
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