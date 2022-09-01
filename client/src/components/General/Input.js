// styled components imports
import { StyledInput } from "../../styledComponents/General/Input";

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  classNames = undefined,
}) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className={classNames}
      />
      <i className="fi fi-br-check"></i>
    </>
  );
};

export default Input;
