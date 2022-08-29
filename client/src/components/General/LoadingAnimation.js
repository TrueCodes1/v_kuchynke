// importing styles
import { LoadingAnimationStyle } from "../../styledComponents/General/LoadingAnimation";

const LoadingAnimation = () => {
  return (
    <>
      <LoadingAnimationStyle />
      <div id="cooking">
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
