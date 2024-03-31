export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const normalizeErrors = (error) => {
  // if (error) {
  //   if ("status" in error) {
  //     const errMsg = "error" in error ? error.error : error.data.message;
  //     return errMsg;
  //   } else {
  //     return error?.message;
  //   }
  // }
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
