// components imports
import Button from "../General/Button";

// styled components imports
import {
  MainWrapper,
  Header,
  MidText,
  SmallText,
} from "../../styledComponents/About/AboutContent";

const AboutContent = () => {
  return (
    <MainWrapper>
      <Header className="about-us-text">Vitaj, nachádzaš sa V Kuchynke!</Header>
      <MidText className="about-us-text">
        Toto je miesto, kde všetci pridávajú, ukladajú a zdieľajú svoje obľúbené
        recepty s priateľmi a známymi.
      </MidText>
      <SmallText className="about-us-text">
        Všetko toto môžeš aj Ty, stačí sa iba registrovať. Vieme, že sa snažíš
        registrácii prirodzene vyhnúť, to robíme asi všetci. Práve preto, pri
        registrácii V Kuchynke, nechceme od Teba žiadne príliš osobné a zbytočné
        informácie. Práve naopak, iba tieto 4: Tvoje meno a priezvisko, Tvoj
        e-mail a heslo.
      </SmallText>
      <Button
        type="link"
        size="mid"
        text="chcem sa registrovať"
        onClick="/sign-up"
        classNames="about-us-link-button"
      />
    </MainWrapper>
  );
};

export default AboutContent;
