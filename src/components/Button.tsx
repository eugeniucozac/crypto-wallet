import { memo, PropsWithChildren } from "react";
import { ButtonProps } from "../types";
import { useClassNames } from "../classes";

export const Button = memo(
  ({
    variant = "primary",
    disabled = false,
    fullWidth = false,
    children,
    ...rest
  }: PropsWithChildren<ButtonProps>) => {
    const classNames = useClassNames({
      variant,
      disabled,
      fullWidth,
    });

    return (
      <button
        className={classNames.button}
        type="button"
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
