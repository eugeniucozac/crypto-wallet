import { useClassNames } from "../classes";
import { StatusProps } from "../types";

export const Status = ({ name, description }: StatusProps) => {
  const classNames = useClassNames({});

  return (
    <section className={classNames.statusWrapper}>
      <img src="success.png" alt="success" />
      <h1 className={classNames.statusName}>{name}</h1>
      <p className={classNames.statusDescription}>{description}</p>
    </section>
  );
};
