import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { validator } from "@/utils/validator";

const TextInput = ({ id, name, type, value, onChange, fieldCustomType }) => {
  const [isValid, setIsValid] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = () => {
    setIsFocus(true);
    const notEmpty = validator.notEmpty(value);
    const phoneIsValid = validator.validatePhoneNumber(value);
    const emailIsValid = validator.validateEmail(value);

    if (fieldCustomType === "SHORT_TEXT") {
      setIsValid(notEmpty);
      setError("Invalid field");
    }

    if (fieldCustomType === "EMAIL") {
      setIsValid(notEmpty && emailIsValid);
      if (!notEmpty && !emailIsValid) {
        setError("Invalid field");
      } else if (!emailIsValid) {
        setError("Inavlid email address");
      } else {
        setError("");
      }
    }

    if (fieldCustomType === "PHONE") {
      setIsValid(notEmpty && phoneIsValid);
      // if (!no)
      if (!notEmpty && !phoneIsValid) {
        setError("Invalid field");
      } else if (!emailIsValid) {
        setError("Inavlid phone number");
      } else {
        setError("");
      }
    }
  };

  // useEffect(() => {
  //   if (isFocus) {
  //     handleFocus();
  //   }
  // }, [value]);

  return (
    <div className="space-y-2 w-full lg:max-w-sm items-center">
      <Label className="text-gray-600 font-semibold" htmlFor={name}>
        {name}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={name}
        name={name}
        onChange={onChange}
        value={value}
        required
        className={`${
          !isValid
            ? "focus:ring-2 focus:ring-red-600"
            : "focus-visible:ring-2 focus-visible:ring-[#46B038]"
        }`}
        // onFocus={handleFocus}
        onBlur={handleFocus}
        autoComplete="off"
        // autoSave="false"
        // autoFill={false}
      />
      {!isValid && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
