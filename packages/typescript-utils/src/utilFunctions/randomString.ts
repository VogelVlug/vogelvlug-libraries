export const randomString = (size = 32) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < size) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
