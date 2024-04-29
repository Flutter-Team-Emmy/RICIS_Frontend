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

  if (error?.data?.message) {
    return error?.data?.message;
  }

  if (isErrorObject) {
    if (error?.data?.error) {
      return error?.data?.error?.message;
    }
    if (error?.data?.errors) {
      const err = error?.data?.errors?.map((err) => err?.message).join(" ");
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
        start_date: "",
        end_date: "",
      };
  }
};

export const EnLocalDateFormat = (date) => {
  const year = date?.getFullYear();
  const month = ("0" + (date?.getMonth() + 1))?.slice(-2);
  const day = ("0" + date?.getDate())?.slice(-2);
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
};

export const truncateWithEllipsisAndExtension = (filename, maxLength) => {
  // If filename is shorter than maxLength, return it as it is
  if (filename.length <= maxLength) {
    return filename;
  }

  // Determine the length of the filename without the extension
  const extensionIndex = filename.lastIndexOf(".");
  const filenameWithoutExtension =
    extensionIndex !== -1 ? filename.slice(0, extensionIndex) : filename;

  // Calculate how many characters should be taken from the start and end of the filename
  const charsFromStart = Math.ceil((maxLength - 4) / 2); // 4 is the length of "...."
  const charsFromEnd = maxLength - charsFromStart - 4;

  // Construct the truncated filename with "...." in the middle and the file extension at the end
  const truncatedFilename =
    filenameWithoutExtension.slice(0, charsFromStart) +
    "...." +
    filenameWithoutExtension.slice(-charsFromEnd) +
    (extensionIndex !== -1 ? filename.slice(extensionIndex) : "");

  return truncatedFilename;
};

export const getActionStatement = (member, action, executor) => {
  switch (action) {
    case "CREATE_ACCOUNT":
      return member === "Staff"
        ? `Staff account was created by ${executor}`
        : "User account was created";

    case "LOGIN":
      return `${member} logged into account`;

    case "LOGOUT":
      return `${member} logged out of account`;

    case "SUSPENDED":
      return `${member} account was suspended by ${executor}`;

    case "ACTIVATE":
      return `${member} account was activated by ${executor}`;

    case "RESET_PASSWORD":
      return `${member} password was updated`;
    // break;

    default:
      break;
  }
};
