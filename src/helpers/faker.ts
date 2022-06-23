export const createFakeArrayFromObject = (data: object, quantity: number): any[] => {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr[i] = { ...data };
  }
  return arr;
};
