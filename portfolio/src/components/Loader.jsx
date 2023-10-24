import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => (prevPercentage + 1) % 101);
    }, ); // Adjust the interval for the animation speed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const loaderStyle = "text-white text-2xl font-bold";

  return (
    <Html as="div" center className={loaderStyle}>
      {percentage}%
    </Html>
  );
};

export default CanvasLoader;
