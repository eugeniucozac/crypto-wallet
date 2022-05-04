import { useMemo } from "react";
import cls from "classnames";
import { ClassNameProps } from "../types";
import classes from "./classes";

export const useClassNames = ({
  variant = "primary",
  disabled,
  fullWidth,
  error,
}: ClassNameProps) =>
  useMemo(() => {
    const buttonDisabled = disabled ? "opacity-20" : "";
    const buttonFullWidth = fullWidth ? "w-full" : "";
    const validationError = error ? "border-red-500" : "";

    const classNames = {
      wrapper: classes.wrapper.root,
      container: classes.container,
      h2: classes.h2,
      h3: classes.h3,
      h4: classes.h4,
      h5: classes.h5,
      strong: classes.strong,
      paragraph: classes.paragraph,
      flex: classes.flex,
      footer: classes.footer,
      button: cls(
        classes.button[variant],
        buttonDisabled,
        buttonFullWidth,
        classes.button.root
      ),
      input: cls(classes.input.root, validationError),
      circleAvatar: classes.circleAvatar,
      whiteSquare: classes.whiteSquare,
      buttonsWrapper: classes.wrapper.buttons,
      success: classes.success,
      accountWrapper: classes.wrapper.account,
      walletWrapper: classes.wrapper.wallet,
      sendIcon: classes.sendIcon,
      transaction: classes.transaction.root,
      transactions: classes.transactions,
      transactionIcon: classes.transaction.icon,
      transactionAmount: classes.transaction.amount,
      accountLink: classes.accountLink,
      code: cls(classes.cropWord, classes.paragraph),
      inputLabel: classes.input.label,
      link: classes.link,
      recipient: classes.recipient,
      inputWrapper: classes.input.wrapper,
      statusWrapper: classes.status.root,
      statusName: classes.status.name,
      statusDescription: classes.status.description,
    };

    return classNames as Record<keyof typeof classNames, string>;
  }, [variant, disabled, fullWidth, error]);
