import { TransactionProps } from "../types";

const defaults = {
  publicAddress: "0xbAbb42DBcCd5f09eAD0d7B6Ad0c2701Fda9Db058",
  name: "MyAccount",
  balance: 9405,
  ethPrice: 2880,
  pastTransactions: [
    {
      date: new Date("05-03-2022 08:00"),
      amount: 3,
      status: "Sent",
      price: 8400,
      recipient: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      sender: "0xbAbb42DBcCd5f09eAD0d7B6Ad0c2701Fda9Db058",
    },
    {
      date: new Date("05-03-2022 09:00"),
      amount: 2,
      status: "Sent",
      price: 5000,
      recipient: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      sender: "0xbAbb42DBcCd5f09eAD0d7B6Ad0c2701Fda9Db058",
    },
    {
      date: new Date("05-03-2022 10:00"),
      amount: 4,
      status: "Sent",
      price: 11600,
      recipient: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      sender: "0xbAbb42DBcCd5f09eAD0d7B6Ad0c2701Fda9Db058",
    },
  ] as TransactionProps[],
};

export default defaults;
