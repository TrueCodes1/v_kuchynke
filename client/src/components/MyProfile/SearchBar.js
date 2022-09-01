// components imports
import Input from "../General/Input";

const SearchBar = ({ placeholder, name, value, onChange, classNames }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      classNames={classNames}
    />
  );
};

export default SearchBar;
