const MidRight = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: "600px",
      }}
    >
      <div
        className="cursor-pointer"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #fff, yellow 60%, #caa000)",
          transform: "rotateY(-54deg)",
          transformStyle: "preserve-3d",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          margin: "50px auto",
        }}
      ></div>
    </div>
  );
};

export default MidRight;
