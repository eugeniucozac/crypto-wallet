import { LeafNodesOf } from "../types";

const classes = {
  // nested object of tailwind classes
  wrapper: {
    root: "flex justify-center h-screen w-screen bg-slate-50 py-20",
    buttons: "flex gap-3",
    wallet:
      "text-center w-full bg-sky-50 py-8 my-5 rounded-md items-center flex flex-col",
    account: "p-6 w-full",
  },
  container: "w-[26rem] bg-white rounded-md shadow-lg relative flex",
  flex: "flex",
  h2: "text-uppercase font-bold text-3xl text-zinc-800",
  h3: "text-sm font-semibold",
  h4: "text-uppercase text-sm text-gray-400",
  h5: "text-base font-semibold",
  paragraph: "text-sm font-semibold text-gray-400",
  strong: "text-sm font-semibold text-zinc-800",
  footer: "border-t-2 border-slate-100 p-4 absolute bottom-0 w-full",
  button: {
    root: "py-2 px-4 rounded text-sm font-semibold",
    disabled: "",
    fullWidth: "w-full",
    primary: "text-white bg-blue-500",
    secondary: "border-2 border-zinc-800",
  },
  input: {
    root: "w-full text-sm font-normal text-slate-400 border-b-2 border-zinc-800 py-2",
    label: "w-full text-sm font-medium text-slate-500",
    wrapper: "w-full mb-4",
  },
  success: "text-center items-center flex",
  link: "text-sm font-semibold text-sky-500 mt-4",
  circleAvatar: "bg-black mr-4 h-9 w-9 rounded-full p-2 mt-1",
  whiteSquare: "bg-white h-full w-full",
  sendIcon:
    "my-3 rounded-full text-white bg-blue-500 h-12 w-12 flex items-center justify-center",
  transaction: {
    root: "flex border-b-2 border-slate-100 py-4 gap-x-4",
    icon: "h-12 w-12 rounded-full p-1 border-2 border-slate-100 items-center justify-center flex",
    amount: "ml-auto text-right",
  },
  transactions: "h-80 overflow-auto",
  cropWord: "overflow-hidden whitespace-nowrap text-ellipsis w-32",
  accountLink: "text-sm font-semibold text-sky-500 mt-4",
  recipient: "flex-col flex p-6 w-full",
  status: {
    root: "text-center items-center flex flex-col",
    name: "text-2xl font-bold my-2",
    description: "text-sm font-semibold text-gray-400 px-28 my-4",
  },
};

export default classes as LeafNodesOf<typeof classes, string>;
