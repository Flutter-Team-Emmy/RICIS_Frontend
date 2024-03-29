export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

// export const normalizeErrors = (data) => {
//   const isErr = Object?.keys(data?.data).includes("error");
//   const err = data?.data?.error?.message;
//   return { isErr, err };
// };
