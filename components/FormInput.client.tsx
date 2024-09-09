import React, { useState } from "react";

type FormInputProps = {
  label: string;
  value: string;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const shrinkLabel = isFocused || value.length > 0;

  return (
    <div className="relative my-11">
      <input
        className="bg-white text-gray-600 text-lg p-2.5 pl-1 w-full border-b border-gray-400 rounded-none focus:outline-none focus:border-b-black transition-all"
        value={value}
        {...otherProps}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {label && (
        <label
          className={`absolute left-1 top-2.5 text-gray-500 text-base transition-all duration-300 ${
            shrinkLabel ? "top-[-16px] text-xs text-black" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
