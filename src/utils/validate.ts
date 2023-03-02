const min = (minNum: number) => (value: string | undefined) => {
  if (value !== undefined && value.length < minNum && value.length > 0) {
    return `${minNum}자 이상 입력해주세요.`;
  } else {
    return undefined;
  }
};

const max = (maxNum: number) => (value: string | undefined) => {
  if (value !== undefined && value.length > maxNum && value.length > 0) {
    return `${maxNum}자 이하로 입력해주세요.`;
  } else {
    return undefined;
  }
};

const isError = (obj: Record<string, any>) => {
  return Object.values(obj).some((value) => value !== undefined);
};

const isEmpty = (obj: Record<string, any>) => {
  return Object.values(obj).some((value) => value === "");
};

export { min, max, isError, isEmpty };
