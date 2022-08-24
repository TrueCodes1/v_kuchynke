// global imports
import classNames from "classnames";
import { Link } from "react-router-dom";

// styled components imports
import {
  SmallButton,
  LargeButton,
} from "../../styledComponents/General/Button";

const Button = ({ size, text, link }) => {
  return (
    <>
      {size === "small" && (
        <Link to={link}>
          <SmallButton className="small">{text}</SmallButton>
        </Link>
      )}
      {size === "large" && (
        <Link to={link}>
          <LargeButton className="large">{text}</LargeButton>
        </Link>
      )}
    </>
  );
};

export default Button;
