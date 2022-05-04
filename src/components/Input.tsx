import { memo } from "react";
import { InputProps } from "../types";
import { useClassNames } from "../classes";

export const Input = memo(
  ({
    type = "text",
    placeholder = "",
    label,
    value,
    name,
    error,
    onChange,
    ...rest
  }: InputProps) => {
    const classNames = useClassNames({ error });

    return (
      <section className={classNames.inputWrapper}>
        <label className={classNames.inputLabel}>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={classNames.input}
          {...rest}
        />
      </section>
    );
  }
);
