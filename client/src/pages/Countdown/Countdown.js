// styled components imports
import { Parent } from "../../styledComponents/ReleaseDate/CountdownContainer";

// containers imports
import Branding from "../../containers/Countdown/Branding";
import Counter from "../../containers/Countdown/Counter";

const Countdown = () => {
  return (
    <Parent>
      <Branding />
      <Counter />
    </Parent>
  );
};

export default Countdown;
