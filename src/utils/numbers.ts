const isValidNumber = (number: any) => Boolean(Number.isFinite(number));

const getRange = (start: number, end: number, step?: number): number[] => {
  const len = Math.abs(end - start) / (step || 1) + 1;
  const direction = start < end ? 1 : -1;
  const stepSize = direction * (step || 1);
  return Array(len)
    .fill(0)
    .map((_, index) => start + stepSize * index);
};

export { isValidNumber, getRange };
