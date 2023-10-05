import { useDarkModeStore } from "@/store/darkMode";

export function useDarkMode() {
  const darkModeStore = useDarkModeStore();
  return darkModeStore.darkMode;
}

export function useToggleDarkMode() {
  const darkModeStore = useDarkModeStore();
  darkModeStore.toggleDarkMode();
}
