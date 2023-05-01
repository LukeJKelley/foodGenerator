import { randomElementFunction } from "../helpers/randomElementFunction";

export const getUniqueRandomElements = (arr) => {
  const firstRandomElement = randomElementFunction(arr);
  let secondRandomElement = randomElementFunction(arr);

  while (firstRandomElement.randomIndex === secondRandomElement.randomIndex) {
    secondRandomElement = randomElementFunction(arr);
  }

  return {
    firstRandomElement: firstRandomElement.randomElement,
    secondRandomElement: secondRandomElement.randomElement,
  };
};

export const removeDisplayedElements = (arr, elementsToRemove) => {
  return arr.filter((el) => !elementsToRemove.includes(el));
};
