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
  id = undefined,
}) => {
  return (
    <>
      {type === "link" && (
        <Link to={onClick}>
          {size === "small" && (
            <SmallButton
              className={`button button-small ${classNames}`}
              id={id}
            >
              {text}
            </SmallButton>
          )}
          {size === "mid" && (
            <MidButton className={`button button-mid ${classNames}`} id={id}>
              {text}
            </MidButton>
          )}
          {size === "large" && (
            <LargeButton
              className={`button button-large ${classNames}`}
              id={id}
            >
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
              id={id}
            >
              {text}
            </SmallButton>
          )}
          {size === "mid" && (
            <MidButton
              className={`button button-mid ${classNames}`}
              onClick={() => onClick()}
              disabled={disabled && true}
              id={id}
            >
              {text}
            </MidButton>
          )}
          {size === "large" && (
            <LargeButton
              className={`button button-large ${classNames}`}
              onClick={() => onClick()}
              disabled={disabled && true}
              id={id}
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
