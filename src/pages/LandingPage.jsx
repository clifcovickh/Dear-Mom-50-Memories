import { useState } from "react";
import LottieCake from "../components/LottieCake";
import Confetti from "../components/Confetti";
import { useNavigate } from "react-router-dom";
import mainImage from "../assets/main.jpg"; 

export default function LandingPage() {
  const [blown, setBlown] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleBlow = () => {
    setShowConfetti(true);
    setBlown(true);

    setTimeout(() => {
      setShowConfetti(false); 
      setShowText(true);      
    }, 2000);

    setTimeout(() => {
      navigate("/gallery");   
    }, 5000);
  };

  return (
    <div className="relative w-screen h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden">
      {showConfetti && <Confetti visible={true} />}
      <LottieCake />

      {!blown && (
        <button
          onClick={handleBlow}
          className="mt-6 px-6 py-3 rounded-full bg-rose-400 text-white shadow-md hover:bg-rose-500 transition"
        >
          Blow 🎂
        </button>
      )}

      {showText && (
        <div className="flex flex-col items-center justify-center animate-fade-in mt-6 z-10">
          <img
            src={mainImage}
            alt="Mom and me"
            className="w-[300px] md:w-[400px] rounded-xl shadow-lg mb-4"
          />
          <h1 className="text-xl md:text-3xl font-serif text-pink-800">
            Happy birthday Mamiii
          </h1>
        </div>
      )}
    </div>
  );
}
