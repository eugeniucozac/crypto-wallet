import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { UserAccount } from "../components/UserAccount";
import { Wallet } from "../components/Wallet";
import { useAppState } from "../context/background/AppState";
import { Transaction } from "../components/Transaction";
import { useClassNames } from "../classes";
import { TransactionProps } from "../types";

const Account = () => {
  const classNames = useClassNames({});
  const {
    state: { account, transactions },
  } = useAppState();

  const cryptoAmount = account.balance / account.ethPrice;

  return (
    <>
      <section className={classNames.accountWrapper}>
        <UserAccount name={account.name} code={account.publicAddress} />
        <Link to="/recipient" className={classNames.accountLink}>
          <Wallet
            cryptoName="ETH"
            cryptoAmount={Number(cryptoAmount.toFixed(2))}
            currencyType="USD"
            currencyAmount={account.balance}
          />
        </Link>
        <section className={classNames.transactions}>
          {transactions.map(
            ({ date, amount, price, status }: TransactionProps) => {
              return (
                <Transaction
                  key={uuidv4()}
                  status={status}
                  date={date}
                  amount={amount}
                  price={price}
                />
              );
            }
          )}
        </section>
      </section>
    </>
  );
};

export default Account;
