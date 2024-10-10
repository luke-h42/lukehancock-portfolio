import React, { useEffect, useState } from "react";
import "./Raindrop.css"; // Import CSS for styling the raindrop

const Raindrop = () => {
  const [position, setPosition] = useState(window.scrollY);

  const handleScroll = () => {
    // Update the position based on the current scroll position
    setPosition(window.scrollY);
  };

  useEffect(() => {
    // Set the initial position based on scroll
    setPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate raindrop position as the user scrolls
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const raindropPosition = Math.min(80, (position / pageHeight) * 80);

  return (
    <div
      className="raindrop"
      style={{
        position: "fixed",
        top: `calc(56px + ${raindropPosition}vh)`,
        right: "10px",
        transition: "top 0.5s ease", // smooth transition for the drop
        zIndex: "1000",
      }}
    >
      💧{" "}
      {/* You can replace this with an image of a raindrop or use CSS for a custom drop */}
    </div>
  );
};

export default Raindrop;
