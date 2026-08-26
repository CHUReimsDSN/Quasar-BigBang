export function useDebounce() {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounce = (callback: () => unknown, delay: number) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback();
      timeout = null;
    }, delay);
  };

  return {
    debounce
  }
}
