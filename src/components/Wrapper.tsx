import { memo } from "react";
import { ChildrenProps } from "../types";
import { useClassNames } from "../classes";

export const Wrapper = memo(({ children }: ChildrenProps) => {
  const classNames = useClassNames({});

  return (
    <section className={classNames.wrapper}>
      <section className={classNames.container}>{children}</section>
    </section>
  );
});
