import type { Expense } from "@/types/Expense";
import { computed, ref, watch } from "vue";

const storedExpenses = localStorage.getItem("expenses");
const expenses = ref<Expense[]>(
  storedExpenses ? JSON.parse(storedExpenses) : []
);

watch(
  expenses,
  (newVal) => {
    localStorage.setItem("expenses", JSON.stringify(newVal));
  },
  { deep: true }
);

export function useExpenses() {
  const addExpense = (expense: Expense) => {
    expenses.value = [...expenses.value, expense]; // assign new array to trigger reactivity
  };

  const clearExpenses = () => {
    expenses.value = [];
  };

  const totalCost = computed(() => {
    return expenses.value.reduce((total, expense) => {
      const cost = Number(expense.amount);
      return !isNaN(cost) && cost > 0 ? total + cost : total;
    }, 0);
  });

  return {
    expenses,
    addExpense,
    clearExpenses,
    totalCost,
  };
}
