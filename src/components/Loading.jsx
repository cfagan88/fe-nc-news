import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function Loading() {
  return (
    <div>
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    </div>
  );
}

export default Loading;
