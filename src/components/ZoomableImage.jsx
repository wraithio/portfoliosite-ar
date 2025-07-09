import React, { useState, useRef } from "react";

const ZoomableImage = ({ src, zoomLevel = 1.1, ...props }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const offsetX = -(mouseX * (zoomLevel - 1));
    const offsetY = -(mouseY * (zoomLevel - 1));

    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => {
    setScale(zoomLevel);
  };

  const handleMouseLeave = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const containerStyle = {
    width: "100vw",
    height: "90vh",
    overflow: "hidden",
    position: "relative",
    cursor: "zoom-in",
  };
  const imageStyle = {
    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
    transformOrigin: "0 0",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="Zoomable" style={imageStyle} {...props} />
    </div>
  );
};

export default ZoomableImage;
