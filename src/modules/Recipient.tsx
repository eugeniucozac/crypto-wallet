import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useClassNames } from "../classes";
import { Input } from "../components/Input";
import AppContext from "../context/background/AppContext";
import { Status } from "../types";

const Recipient = () => {
  const { state, addTransaction } = useContext(AppContext);
  const cryptoAmount = state.account.balance / state.account.ethPrice;
  const [form, setForm] = useState({
    recipient: "",
    amount: cryptoAmount.toFixed(2),
  });
  const [error, setError] = useState({
    recipient: false,
    amount: false,
  });

  const classNames = useClassNames({});
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (form.amount === "" || form.recipient === "") {
      setError({
        ...(form.recipient === "" ? { recipient: true } : { recipient: false }),
        ...(form.amount === "" ? { amount: true } : { amount: false }),
      });
    } else {
      const transaction = {
        date: new Date(),
        amount: Number(form.amount),
        status: "Sent" as Status,
        price: Number(form.amount) * state.account.ethPrice,
        recipient: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
        sender: "0xbAbb42DBcCd5f09eAD0d7B6Ad0c2701Fda9Db058",
      };
      setError({
        recipient: false,
        amount: false,
      });
      addTransaction(transaction);
      navigate("/success");
    }
  };

  return (
    <>
      <section className={classNames.recipient}>
        <Input
          label="Add Recipient"
          name="recipient"
          placeholder="Enter Public Address"
          value={form.recipient}
          onChange={handleChange}
          error={error.recipient}
        />
        <Input
          type="number"
          name="amount"
          label="Amount"
          min={0.1}
          max={cryptoAmount}
          step={0.1}
          value={form.amount}
          onChange={handleChange}
          error={error.amount}
        />
      </section>
      <section className={`${classNames.footer} ${classNames.buttonsWrapper}`}>
        <Button variant="secondary" fullWidth onClick={() => navigate("/")}>
          Cancel
        </Button>
        <Button variant="primary" fullWidth onClick={handleSubmit}>
          Next
        </Button>
      </section>
    </>
  );
};

export default Recipient;
