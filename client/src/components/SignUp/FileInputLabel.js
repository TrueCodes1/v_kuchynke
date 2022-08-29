// styled components imports
import {
  SmallLabel,
  MidLabel,
  LargeLabel,
} from "../../styledComponents/SignUp/FileInputLabel";

const Label = ({ size, forName, text }) => {
  return (
    <>
      {size === "small" && (
        <SmallLabel for={forName} className="label label-small">
          {text}
        </SmallLabel>
      )}
      {size === "mid" && (
        <MidLabel for={forName} className="label label-mid">
          {text}
        </MidLabel>
      )}
      {size === "large" && (
        <LargeLabel for={forName} className="label label-large">
          {text}
        </LargeLabel>
      )}
    </>
  );
};

export default Label;
