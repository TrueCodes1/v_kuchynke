// styled components imports
import { StyledInput } from "../../styledComponents/General/Input";

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
