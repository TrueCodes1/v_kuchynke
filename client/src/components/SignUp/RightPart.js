// global imports
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components imports
import Button from "../General/Button";
import ProgressBar from "../General/ProgressBar";

// constants imports
import strings from "../../constants/strings";

// styled components imports
import {
  MainWrapper,
  CookiesTextWrapper,
  CookiesText,
  BottomWrapper,
} from "../../styledComponents/SignUp/RightPart";

const RightPart = () => {
  const { isReadyInPercentage } = useSelector((state) => state.dataSignUpForm);

  return (
    <MainWrapper>
      <CookiesTextWrapper>
        <CookiesText className="sign-up-cookies-text">
          Tu V Kuchynke môžeš nájsť tieto 3 dôležité časti:
          <br />
          <br />
          <ul>
            <li>Pravidlá používania siete V Kuchynke,</li>
            <li>Zásady ochrany osobných údajov a</li>
            <li>Pravidlá používania súborov cookies.</li>
          </ul>
          <br />
          Pre bližšie a rýchlejšie vysvetlenie ich významu klikni sem. Pre
          podrobné porozumenie, neváhaj navštíviť každú zo spomínaných častí.
        </CookiesText>
        <br />
        <CookiesText className="sign-up-cookies-text">
          DÔLEŽITÉ: Registrovaním sa V Kuchynke vyjadruješ svoj súhlas s&nbsp;
          <Link to="/terms-of-use" className="sign-up-text-link">
            Pravidlami používania siete V Kuchynke
          </Link>
          , &nbsp;
          <Link to="/privacy-policy" className="sign-up-text-link">
            Zásadami ochrany osobných údajov
          </Link>
          &nbsp; a&nbsp;
          <Link to="/cookies-policy" className="sign-up-text-link">
            Pravidlami používania súborov cookies
          </Link>
          .
        </CookiesText>
      </CookiesTextWrapper>
      <BottomWrapper>
        <ProgressBar
          text={`Tvoja registrácia je hotová na ${isReadyInPercentage}%`}
          value={isReadyInPercentage}
        />
        <Button />
      </BottomWrapper>
    </MainWrapper>
  );
};

export default RightPart;
