export const randomElementFunction = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  console.log(arr);
  return { randomElement, randomIndex };
};
