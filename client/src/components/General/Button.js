// global imports
import classNames from "classnames";
import { Link } from "react-router-dom";

// styled components imports
import {
  LargeButton,
  MidButton,
  SmallButton,
} from "../../styledComponents/General/Button";

const Button = ({ type, size, text, onClick }) => {
  return (
    <>
      {type === "link" && (
        <Link to={onClick}>
          {size === "small" && (
            <SmallButton className="button button-small">{text}</SmallButton>
          )}
          {size === "mid" && (
            <MidButton className="button button-mid">{text}</MidButton>
          )}
          {size === "large" && (
            <LargeButton className="button button-large">{text}</LargeButton>
          )}
        </Link>
      )}
      {type === "click" && (
        <>
          {size === "small" && (
            <SmallButton
              className="button button-small"
              onClick={() => onClick()}
            >
              {text}
            </SmallButton>
          )}
          {size === "mid" && (
            <MidButton className="button button-mid" onClick={() => onClick()}>
              {text}
            </MidButton>
          )}
          {size === "large" && (
            <LargeButton
              className="button button-large"
              onClick={() => onClick()}
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
