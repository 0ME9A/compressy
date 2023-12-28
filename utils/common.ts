export const dataConverter = (num: number, divide: number): string => {
    if (num / divide > 1024) {
      const toMb = `${num / divide / 1024}`;
      return `${parseInt(toMb)}MB`;
    }
    if (num / divide < 1024) {
      const toKb = `${num / divide}`;
      return `${parseInt(toKb)}KB`;
    }
    return "";
  };