import { Player } from "@lottiefiles/react-lottie-player";
import confettiAnimation from "../assets/Congratulations.json";

export default function Confetti({ visible }) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <Player
        autoplay
        loop={false}
        src={confettiAnimation}
        className="w-[150vw] h-[150vh] scale-[1.5]"
      />
    </div>
  );
}
