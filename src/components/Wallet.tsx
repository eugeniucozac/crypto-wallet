import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { WalletProps } from "../types";
import { useClassNames } from "../classes";

export const Wallet = memo(
  ({ cryptoName, cryptoAmount, currencyType, currencyAmount }: WalletProps) => {
    const classNames = useClassNames({});

    return (
      <section className={classNames.walletWrapper}>
        <h2 className={classNames.h2}>{`${cryptoAmount.toFixed(
          2
        )} ${cryptoName}`}</h2>
        <h4 className={classNames.h4}>{`${currencyAmount.toFixed(
          2
        )} ${currencyType}`}</h4>
        <div className={classNames.sendIcon}>
          <FontAwesomeIcon icon={faArrowUpLong} size="lg" />
        </div>
        <p className={classNames.strong}>Send</p>
      </section>
    );
  }
);
