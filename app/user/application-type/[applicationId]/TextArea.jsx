import { useState, useEffect } from "react";
import { validator } from "@/utils/validator";

const TextArea = ({ name, id, value, onChange }) => {
  const [isValid, setIsValid] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
    const notEmpty = validator.notEmpty(value);
    setIsValid(notEmpty);
  };

  useEffect(() => {
    if (isFocus) {
      handleFocus();
    }
  }, [value]);

  return (
    <div className="w-full lg:max-w-sm items-center space-y-2">
      <label
        htmlFor="message"
        className="block mb-2 text-sm lg:text-md text-gray-600 font-semibold"
      >
        {name}
      </label>
      <textarea
        id="message"
        name={name}
        value={value}
        onChange={onChange}
        required
        rows="4"
        className={` ${
          !isValid
            ? "border-2 border-red-600"
            : "border-gray-300 focus:border-blue-700"
        } block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:outline-none rounded-lg border focus:ring-blue-500`}
        placeholder="Write your thoughts here..."
        // onFocus={handleFocus}
        autoComplete="off"
        onBlur={handleFocus}
        // autoSave="false"
      ></textarea>
      {!isValid && <p className="text-red-500 text-sm">Invalid field</p>}
    </div>
  );
};

export default TextArea;
