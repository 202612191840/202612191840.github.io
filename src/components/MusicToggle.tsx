import { styled } from "@stitches/react";
import { useRef, useState } from "react";

const MusicButton = styled("button", {
  position: "static",
  border: "1px solid rgba(255, 255, 255, 0.7)",
  borderRadius: 999,
  padding: "10px 14px",
  background: "rgba(75, 61, 55, 0.78)",
  color: "white",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.18)",
});

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/BeautifulDay.mp3" loop preload="none" />
      <MusicButton
        type="button"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "배경 음악 끄기" : "배경 음악 켜기"}
      >
        {isPlaying ? "♫ OFF" : "♫ ON"}
      </MusicButton>
    </>
  );
}
