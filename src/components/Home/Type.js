import React, { useState, useEffect } from "react";
import "./Type.css"; // Import CSS for styling

function Type() {
  const strings = [
    "Web Developer ",
    "MERN Stack Developer ",
    "Open Source Contributor ",
  ];
  const emojis = ["｡🇯‌🇸‌", "🚀", "🎯"];

  const [displayText, setDisplayText] = useState(""); // Text being displayed
  const [currentStringIndex, setCurrentStringIndex] = useState(0); // Track the current string
  const [showEmoji, setShowEmoji] = useState(false); // Control emoji display

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let charIndex = 0;
    let emojiTimeout;

    const typeInterval = setInterval(() => {
      setDisplayText(currentString.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentString.length) {
        setShowEmoji(true);
        clearInterval(typeInterval);

        emojiTimeout = setTimeout(() => {
          setShowEmoji(false); // Hide emoji after 1 second
          setTimeout(() => {
            // Proceed to next string after emoji hides
            setDisplayText("");
            setCurrentStringIndex(
              (prevIndex) => (prevIndex + 1) % strings.length
            );
          }, 500);
        }, 1000);
      }
    }, 100); // Adjust speed of typing

    return () => {
      clearInterval(typeInterval);
      clearTimeout(emojiTimeout);
    };
  }, [currentStringIndex]);

  return (
    <div className="type-container">
      <span className="type-text">{displayText}</span>
      {showEmoji && (
        <span className="type-emoji">{emojis[currentStringIndex]}</span>
      )}
    </div>
  );
}

export default Type;
