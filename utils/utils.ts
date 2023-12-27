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

export const round = (num: number, r: number = 0): number => {
  const pow = Math.pow(10, r);
  return Math.floor(num * pow) / pow;
};

export const isSupportedFileType = (file: File | null): boolean => {
  if (!file) return false;
  const supportedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  return supportedFileTypes.includes(file.type);
}

export const resizeImage = async (canvas: HTMLCanvasElement, imgElement: CanvasImageSource, width: number, height: number): Promise<string> => {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
      return Promise.resolve("");
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(imgElement, 0, 0, width, height);
  return Promise.resolve(ctx.canvas.toDataURL("image/png"));
}