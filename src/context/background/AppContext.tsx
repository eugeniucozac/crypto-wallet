import { createContext } from "react";
import constants from "../../utils/constants";
import { AppStore, ContextType } from "../../types";

export const initAppState: AppStore = {
  transactions: constants.pastTransactions,
  account: {
    name: constants.name,
    publicAddress: constants.publicAddress,
    balance: constants.balance,
    ethPrice: constants.ethPrice,
  },
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
});

export default AppContext;
