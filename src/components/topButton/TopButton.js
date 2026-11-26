import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop || 0;
      setVisible(scrollTop > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goUpEvent = () => {
    if (typeof window.scrollTo === "function") {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  };

  return (
    <button
      type="button"
      onClick={goUpEvent}
      id="topButton"
      aria-label="Scroll back to top"
      title="Go up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        visibility: visible ? "visible" : "hidden",
        color: hovered ? theme.text : theme.body,
        backgroundColor: hovered ? theme.body : theme.text,
        border: `solid 1px ${theme.text}`,
      }}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </button>
  );
}
