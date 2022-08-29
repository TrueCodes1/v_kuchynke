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
  CookiesList,
  BottomWrapper,
} from "../../styledComponents/SignUp/RightPart";

const RightPart = () => {
  const { photo, isReadyInPercentage } = useSelector(
    (state) => state.dataSignUpForm
  );

  return (
    <MainWrapper>
      <CookiesTextWrapper>
        <CookiesText className="sign-up-cookies-text">
          Tu V Kuchynke môžeš nájsť tieto 3 dôležité časti:
        </CookiesText>
        <CookiesList>
          <li>
            <Link to="/terms-of-use" className="sign-up-text-link">
              Pravidlá používania siete V Kuchynke,
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="sign-up-text-link">
              Zásady ochrany osobných údajov a
            </Link>
          </li>
          <li>
            <Link to="/cookies-policy" className="sign-up-text-link">
              Pravidlá používania súborov cookies.
            </Link>
          </li>
        </CookiesList>
        <CookiesText className="sign-up-cookies-text">
          Pre bližšie a rýchlejšie vysvetlenie ich významu klikni sem. Pre
          podrobné porozumenie, neváhaj navštíviť každú zo spomínaných častí.
        </CookiesText>
        <CookiesText className="sign-up-cookies-text strong">
          Registrovaním sa V Kuchynke vyjadruješ svoj súhlas s&nbsp;
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
        <Button
          type="click"
          size="large"
          text={photo !== "" ? "Registruj ma" : "Registruj ma aj bez fotky"}
          onClick={() => {
            console.log("ready to registrate");
          }}
          disabled={isReadyInPercentage !== 100}
          classNames="sign-up-button"
        />
      </BottomWrapper>
    </MainWrapper>
  );
};

export default RightPart;
