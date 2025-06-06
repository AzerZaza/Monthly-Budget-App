import { UserDataKey } from "@/constants/storageKeys";
import type { UserData } from "@/types/User";
import { ref, watch } from "vue";

const storedData = localStorage.getItem(UserDataKey);
const userData = ref<UserData>(
  storedData ? JSON.parse(storedData) : { name: "", income: 0, goal: "" }
);

watch(
  userData,
  (newVal) => {
    localStorage.setItem(UserDataKey, JSON.stringify(newVal));
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
