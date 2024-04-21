export const capitalizeFirstLetter = (word) => {
  return word?.charAt(0).toUpperCase() + word?.substring(1).toLowerCase();
};

export const cutString = (str, length) => {
  if (str?.length <= length) {
    return str;
  } else {
    return str?.substring(0, length);
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

export const formatDate = (inputDateStr) => {
  const inputDate = new Date(inputDateStr);
  const formattedDate = `${inputDate.getDate()}/${
    inputDate.getMonth() + 1
  }/${inputDate.getFullYear()}`;
  const formattedTime = `${inputDate.getHours()}:${inputDate.getMinutes()}:${inputDate.getSeconds()}`;
  return `${formattedDate} ${formattedTime}`;
};

export const getDateModified = (date) => {
  const today = new Date();

  switch (date) {
    case "Anytime":
      return {
        start_date: "",
        end_date: "",
      };

    case "Today":
      return {
        start_date: EnLocalDateFormat(today),
        end_date: EnLocalDateFormat(today),
      };

    case "Yesterday":
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return {
        start_date: EnLocalDateFormat(today),
        end_date: EnLocalDateFormat(yesterday),
      };

    case "Last_7_days":
      const lastWeek = new Date(today);
      lastWeek.setDate(today.getDate() - 7);
      return {
        start_date: EnLocalDateFormat(lastWeek),
        end_date: EnLocalDateFormat(today),
      };

    case "Last_30_days":
      const lastMonth = new Date(today);
      lastMonth.setDate(today.getDate() - 30);
      return {
        start_date: EnLocalDateFormat(lastMonth),
        end_date: EnLocalDateFormat(today),
      };

    default:
      return {
        start_date: EnLocalDateFormat(today),
        end_date: EnLocalDateFormat(today),
      };
  }
};

export const EnLocalDateFormat = (date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const removeEmptyFields = (obj) => {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    }
  }
  return obj;
}
