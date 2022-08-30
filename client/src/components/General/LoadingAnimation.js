// importing styles
import { LoadingAnimationStyle } from "../../styles/General/LoadingAnimation";

const LoadingAnimation = () => {
  return (
    <>
      <LoadingAnimationStyle />
      <div id="cooking" className="loading-animation-pancake">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;
