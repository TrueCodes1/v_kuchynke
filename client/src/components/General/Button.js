// global imports
import classNames from "classnames";
import { Link } from "react-router-dom";

// styled components imports
import {
  LargeButton,
  MidButton,
  SmallButton,
} from "../../styledComponents/General/Button";

const Button = ({
  type,
  size,
  text,
  onClick,
  disabled,
  classNames = undefined,
}) => {
  return (
    <>
      {type === "link" && (
        <Link to={onClick}>
          {size === "small" && (
            <SmallButton className={`button button-small ${classNames}`}>
              {text}
            </SmallButton>
          )}
          {size === "mid" && (
            <MidButton className={`button button-mid ${classNames}`}>
              {text}
            </MidButton>
          )}
          {size === "large" && (
            <LargeButton className={`button button-large ${classNames}`}>
              {text}
            </LargeButton>
          )}
        </Link>
      )}
      {type === "click" && (
        <>
          {size === "small" && (
            <SmallButton
              className={`button button-small ${classNames}`}
              onClick={() => onClick()}
              disabled={disabled && true}
            >
              {text}
            </SmallButton>
          )}
          {size === "mid" && (
            <MidButton
              className={`button button-mid ${classNames}`}
              onClick={() => onClick()}
              disabled={disabled && true}
            >
              {text}
            </MidButton>
          )}
          {size === "large" && (
            <LargeButton
              className={`button button-large ${classNames}`}
              onClick={() => onClick()}
              disabled={disabled && true}
            >
              {text}
            </LargeButton>
          )}
        </>
      )}
    </>
  );
};

export default Button;
