import { ExpensesKey } from "@/constants/storageKeys";
import type { Expense } from "@/types/Expense";
import { computed, ref, watch } from "vue";

const storedExpenses = localStorage.getItem(ExpensesKey);
const expenses = ref<Expense[]>(
  storedExpenses ? JSON.parse(storedExpenses) : []
);

watch(
  expenses,
  (newVal) => {
    localStorage.setItem(ExpensesKey, JSON.stringify(newVal));
  },
  { deep: true }
);

const selectedCategory = ref<string>("");

const filteredExpenses = computed(() => {
  if (!selectedCategory.value) return expenses.value;
  return expenses.value.filter(
    (expense) => expense.category.name === selectedCategory.value
  );
});

export function useExpenses() {
  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
    };
    expenses.value = [...expenses.value, newExpense];
  };

  const editExpense = (updatedExpense: Expense) => {
    expenses.value = expenses.value.map((expense) =>
      expense.id === updatedExpense.id
        ? { ...expense, ...updatedExpense }
        : expense
    );
  };

  const deleteExpense = (expenseId: string) => {
    expenses.value = expenses.value.filter(
      (expense) => expense.id !== expenseId
    );
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
    filteredExpenses,
    addExpense,
    editExpense,
    deleteExpense,
    clearExpenses,
    totalCost,
    selectedCategory,
  };
}
