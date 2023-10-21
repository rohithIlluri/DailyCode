import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const loaderStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 87, 51, 0.3))", // Adjust the opacity by changing the last value (0.3 for 30% opacity)
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  };

  const loaderTextStyle = {
    fontSize: "24px",
    color: "#FFF",
    fontWeight: 800,
    marginTop: "20px",
  };

  return (
    <Html as='div' center style={loaderStyles}>
      <div className='loader-spinner'></div>
      <p style={loaderTextStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
