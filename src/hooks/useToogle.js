export function useToogle() {
  const darks = (ches) => {
    if (ches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  };

  return { darks };
}
