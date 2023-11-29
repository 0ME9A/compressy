const theme = () => {
  if (localStorage.theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    return false;
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    return true;
  }
};

export { theme };
