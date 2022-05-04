import { useEffect, useReducer, useContext } from "react";
import { TransactionsService } from "../../services/TransactionsService";
import AppContext, { initAppState } from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import { AppStore, TransactionProps } from "../../types";

const transactionService = new TransactionsService({
  transactions: initAppState.transactions,
});

export const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  const getTransactions = async () => {
    const transactions = await transactionService.getListOfTransactions();
    setTransactions(transactions);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setState = (state: AppStore) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: state,
    });
  };

  const setTransactions = (transactions: TransactionProps[]) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transactions,
    });
  };

  const setBalance = (balance: number) => {
    dispatch({
      type: Actions.SET_BALANCE,
      payload: balance,
    });
  };

  const addTransaction = async (transaction: TransactionProps) => {
    await transactionService.addTransaction(transaction);
    setTransactions([...state.transactions, transaction]);
    setBalance(state.account.balance - transaction.price);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
