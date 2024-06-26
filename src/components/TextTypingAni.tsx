import React, { useEffect, useState } from "react";

interface AnimationProps {
  text: string | undefined;
  setIsTypingComplete: (v: boolean) => void;
}

const TextTypingAni = ({ text, setIsTypingComplete }: AnimationProps) => {
  const [sequence, setSequence] = useState<string>("");

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setSequence(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text, setIsTypingComplete]);

  return (
    <p
      className="landing-p whitespace-pre-line break-normal"
      style={{ fontFamily: "TTLaundryGothicB" }}
    >
      {sequence}
      <span className="blink ml-1 inline-block h-[1em] w-0.5 bg-[#e0e5ef] align-top" />
    </p>
  );
};

export default TextTypingAni;
