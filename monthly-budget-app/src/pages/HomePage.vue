<template>
    <div class="flex gap-8 pb-12 max-h-[740px]">
        <div class="flex-1">
            <Description />
        </div>
        <div class="flex-1 flex gap-8">
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
