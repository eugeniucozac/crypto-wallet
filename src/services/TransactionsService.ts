import { BaseService } from "./infrastructure/BaseService";
import { TransactionsServiceState, TransactionProps } from "../types";

export class TransactionsService extends BaseService<TransactionsServiceState> {
  constructor(initialState: TransactionsServiceState) {
    super(
      initialState || {
        transactions: [],
      }
    );
  }

  public async addTransaction(
    transaction: TransactionProps
  ): Promise<TransactionProps[]> {
    return new Promise<TransactionProps[]>((resolve) => {
      const state = this.getState();

      this.updateState({
        transactions: [...state.transactions, transaction],
      });

      setTimeout(() => {
        resolve(state.transactions);
      }, 300);
    });
  }

  public async getListOfTransactions(): Promise<TransactionProps[]> {
    return new Promise<TransactionProps[]>((resolve) => {
      const state = this.getState();

      setTimeout(() => {
        resolve(state.transactions);
      }, 300);
    });
  }
}
