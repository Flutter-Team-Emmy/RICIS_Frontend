export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const normalizeErrors = (data, error) => {
  if (error.status < 200 || error.status > 299) {
    const err = data?.data?.error?.message;
    return { isErr: true, err };
  }
  return { isErr: false, err: "" };
};
