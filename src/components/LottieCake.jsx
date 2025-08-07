import { Player } from '@lottiefiles/react-lottie-player';
import cakeAnimation from '../../public/assets/lottie/cake.json';

export default function LottieCake() {
  return (
    <Player
      autoplay
      keepLastFrame
      controls={false}
      src={cakeAnimation}
      style={{ height: '300px', width: '300px' }}
    />
  );
}
