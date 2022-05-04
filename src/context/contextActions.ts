import { AppStore, TransactionProps } from "../types";

enum Actions {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_STATE = "SET_STATE",
  SET_BALANCE = "SET_BALANCE",
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS;
  payload: TransactionProps[];
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<AppStore>;
}

export interface SetBalanceAction {
  type: Actions.SET_BALANCE;
  payload: number;
}

export default Actions;
