export const handleIncrease = (
  x: React.Dispatch<React.SetStateAction<number>>
) => {
  x((el: number) => el + 1);
};

export const handleDecrease = (
  x: React.Dispatch<React.SetStateAction<number>>
) => {
  x((el: number) => el - 1);
};
