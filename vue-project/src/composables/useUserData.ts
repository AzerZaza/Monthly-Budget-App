import { ref, watch } from 'vue';

interface UserData {
  name: string;
  income: number;
  goal: string;
}

const storedData = localStorage.getItem('userData');
const userData = ref<UserData>(
  storedData ? JSON.parse(storedData) : { name: '', income: 0, goal: '' }
);

watch(
  userData,
  (newVal) => {
    localStorage.setItem('userData', JSON.stringify(newVal));
  },
  { deep: true }
);

export function useUserData() {
  const setUserData = (data: UserData) => {
    userData.value = data;
  };

  return {
    userData,
    setUserData,
  };
}
