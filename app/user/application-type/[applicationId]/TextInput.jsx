import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { validator } from "@/utils/validator";

const TextInput = ({ id, name, type, value, onChange, fieldCustomType }) => {
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => {
    const notEmpty = validator.notEmpty(value);
    const phoneIsValid = validator.validatePhoneNumber(value);
    const emailIsValid = validator.validateEmail(value);

    if (fieldCustomType === "SHORT_TEXT") {
      setIsValid(notEmpty);
    }

    if (fieldCustomType === "EMAIL") {
      setIsValid(notEmpty && emailIsValid);
    }

    if (fieldCustomType === "PHONE") {
      setIsValid(notEmpty && phoneIsValid);
    }
  };

//   useEffect(() => {
//     handleFocus();
//   }, [isValid]);

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
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      {!isValid && <p className="text-red-500 text-sm">Invalid field</p>}
    </div>
  );
};

export default TextInput;
