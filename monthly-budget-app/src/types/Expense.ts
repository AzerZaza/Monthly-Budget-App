export interface ExpenseCategory {
  name: string;
  image: string;
}

export interface Expense {
  id: string;
  name: string;
  amount: number | string;
  category: ExpenseCategory;
  date: string;
}

export interface FixedExpense {
  image: string;
  name: string;
  amount: number | string;
  category: ExpenseCategory;
}
