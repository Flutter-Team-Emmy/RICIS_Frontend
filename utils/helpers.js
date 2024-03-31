export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const cutString = (str, length) => {
  if (str.length <= length) {
    return str;
  } else {
    return str.substring(0, length);
  }
};

export const normalizeErrors = (error) => {
  const isErrorObject = typeof error?.data === "object";

  if (isErrorObject) {
    if (error?.data.error) {
      return error?.data.error?.message;
    }
    if (error?.data.errors) {
      const err = error?.data.errors.map((err) => err.message).join(" ");
      return err;
    }
  } else {
    if (error?.data?.message) {
      return error?.data?.message;
    }
  }
};
