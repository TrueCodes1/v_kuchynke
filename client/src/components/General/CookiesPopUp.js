// global imports
import classNames from "classnames";
import { Link } from "react-router-dom";

// assets imports
import arrowImg from "../../assets/General/arrow_down.svg";

// styled components imports
import {
  ArrowImage,
  Background,
  CookiesHeader,
  CookiesText,
  Content,
  Parent,
} from "../../styledComponents/General/CookiesPopUp";

const CookiesPopUp = () => {
  return (
    <>
      <Parent className="cookies-parent">
        <ArrowImage src={arrowImg} />
        <Background className="cookies-popup-background" />
        <Content className="cookies-popup-content">
          <CookiesHeader className="cookies-popup-text">
            Vitaj V Kuchynke!
          </CookiesHeader>
          <br />
          <CookiesText>
            Ani táto sieť nie je výnimkou a preto sa aj u nás využívajú cookies.
          </CookiesText>
          <br />
          <CookiesText>
            Chceme Ti len oznámiť, že my tu u nás využívame iba tie cookies,
            ktoré sú nevyhnutné a ich podrobný popis nájdeš tuto. Používaním V
            Kuchynke súhlasíš s ich využitím na našom webe. :-)
          </CookiesText>
        </Content>
      </Parent>
    </>
  );
};

export default CookiesPopUp;
