import Actions from "../contextActions";
import { AppStore, AppAction } from "../../types";

const appReducer = (state: AppStore, action: AppAction): AppStore => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_BALANCE:
      return {
        ...state,
        account: {
          ...state.account,
          balance: action.payload,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
