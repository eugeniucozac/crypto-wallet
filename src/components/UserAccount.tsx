import { memo } from "react";
import { UserAccountProps } from "../types";
import { useClassNames } from "../classes";

export const UserAccount = memo(({ name, code }: UserAccountProps) => {
  const classNames = useClassNames({});

  return (
    <section className={classNames.flex}>
      <div className={classNames.circleAvatar}>
        <div className={classNames.whiteSquare}></div>
      </div>
      <section>
        <h3 className={classNames.h5}>{name}</h3>
        <p className={classNames.code}>{code}</p>
      </section>
    </section>
  );
});
