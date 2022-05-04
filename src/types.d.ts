import { ReactChildren, ReactChild } from "react";
import {
  SetBalanceAction,
  SetStateAction,
  SetTransactionAction,
} from "./context/contextActions";

type Variant = "primary" | "secondary";

type InputType = "text" | "number";

export type Status = "Sent" | "Received";

export interface TransactionProps {
  date: Date;
  amount: number;
  status: Status;
  price: number;
  recipient?: string;
  sender?: string;
}

export interface InputProps {
  label: string;
  value: string;
  name: string;
  type?: InputType;
  placeholder?: string;
  error?: boolean;
  min?: number;
  max?: number;
  step?: number;
  onChange: (event: any) => void;
}

export interface AccountState {
  name: string;
  publicAddress: string;
  balance: number;
  ethPrice: number;
}

export interface AppStore extends TransactionsServiceState {
  account: AccountState;
}

export interface WalletProps {
  cryptoName: string;
  cryptoAmount: number;
  currencyType: string;
  currencyAmount: number;
}

export interface UserAccountProps {
  name: string;
  code: string;
}

export interface StatusProps {
  name: string;
  description: string;
}

export interface ClassNameProps {
  variant?: Variant;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: boolean;
}

export interface TransactionsServiceState {
  transactions: TransactionProps[];
}

export interface ButtonProps extends ClassNameProps {
  onClick?: () => void;
}

export interface ChildrenProps {
  children: ReactChild | ReactChildren;
}

export interface ContextType {
  state: AppStore;
  addTransaction: (transaction: TransactionProps) => void;
  setState: (state: AppStore) => void;
}

declare type Primitive = string | boolean | number | null | undefined;

export type AppAction =
  | SetTransactionAction
  | SetStateAction
  | SetBalanceAction;

export declare type LeafNodesOf<Obj, Leaf> = {
  [Prop in keyof Obj]: Obj[Prop] extends Primitive
    ? Leaf
    : Obj[Prop] extends Record<string | number, any>
    ? LeafNodesOf<Obj[Prop], Leaf>
    : never;
};
