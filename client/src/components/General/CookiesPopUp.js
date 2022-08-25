// global imports
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const CookiesPopUp = ({ isDarkTheme }) => {
  const [isPopupShown, setIsPopupShown] = useState(true);

  return (
    <AnimatePresence>
      {isPopupShown && (
        <motion.div
          exit={{ bottom: "-1500px", opacity: "0" }}
          style={{ zIndex: 1001, position: "absolute", bottom: "0" }}
        >
          <Parent className="cookies-parent">
            <ArrowImage onClick={() => setIsPopupShown(false)} src={arrowImg} />
            <Background className="cookies-popup-background" />
            <Content className="cookies-popup-content">
              <CookiesHeader className="cookies-popup-text">
                Vitaj V Kuchynke!
              </CookiesHeader>
              <br />
              <CookiesText>
                Ani táto sieť nie je výnimkou a preto sa aj u nás využívajú
                cookies.
              </CookiesText>
              <br />
              <CookiesText>
                Chceme Ti len oznámiť, že my tu u nás využívame iba tie cookies,
                ktoré sú nevyhnutné a ich podrobný popis nájdeš{" "}
                <a href="/cookies-popup" className="cookies-popup-link">
                  tuto
                </a>
                . Používaním V Kuchynke súhlasíš s ich využitím na našom webe.
                :-)
              </CookiesText>
            </Content>
          </Parent>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesPopUp;
