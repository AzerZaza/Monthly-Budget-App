<template>
    <div class="flex flex-col-reverse xl:flex-row gap-8 pb-6 xl:pb-12 items-center xl:items-stretch h-auto xl:max-h-[750px]">
        <div class="flex-1 w-full xl:w-auto">
            <Description />
        </div>

        <div class="border-t-1 border-solid block xl:hidden border-box-color-light w-full" />

        <div class="flex-1 items-center sm:items-baseline flex-col w-full justify-around sm:flex-row flex gap-8 sm:gap-3 xl:gap-8">
            <IncomeCalculation />
            <FixedExpensesSelection />
        </div>
    </div>

</template>

<script lang="ts" setup>
import Description from '@/components/Description.vue';
import FixedExpensesSelection from '@/components/FixedExpensesSelection.vue';
import IncomeCalculation from '@/components/IncomeCalculation.vue';
</script>
