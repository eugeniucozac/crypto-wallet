import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Status } from "../components/Status";
import { useClassNames } from "../classes";

const Success = () => {
  const classNames = useClassNames({});
  const navigate = useNavigate();

  return (
    <>
      <section className={classNames.success}>
        <section className="pb-20">
          <Status
            name="Success."
            description="You've successfully sent your funds."
          />
          <Link to="/" className={classNames.link}>
            View on Etherscan &rarr;
          </Link>
        </section>
      </section>
      <section className={classNames.footer}>
        <Button variant="secondary" fullWidth onClick={() => navigate("/")}>
          Done
        </Button>
      </section>
    </>
  );
};

export default Success;
