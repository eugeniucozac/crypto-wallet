import { memo } from "react";
import { format } from "date-fns";
import { TransactionProps } from "../types";
import { useClassNames } from "../classes";

export const Transaction = memo(
  ({ status, date, amount, price }: TransactionProps) => {
    const classNames = useClassNames({});

    return (
      <section className={classNames.transaction}>
        <section className={classNames.transactionIcon}>
          <img src="eth.svg" alt="etherium" />
        </section>
        <section>
          <h3 className={classNames.h5}>{status} Ether</h3>
          <p className={classNames.paragraph}>
            {format(date, "dd-MM-yyyy HH:mm")}
          </p>
        </section>
        <section className={classNames.transactionAmount}>
          <h3 className={classNames.h5}>-{amount} ETH</h3>
          <p className={classNames.paragraph}>-{price}USD</p>
        </section>
      </section>
    );
  }
);
