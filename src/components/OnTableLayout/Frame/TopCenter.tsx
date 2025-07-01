const TopCenter = () => {
  return (
    <div className="relative w-full h-full">
      <div
        style={{
          width: 200,
          height: 100,
          background: "rgba(0, 123, 255, 1)",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: `
            0 0 20px rgba(0, 123, 255, 0.8),
            0 0 40px rgba(0, 123, 255, 0.6),
            0 0 60px rgba(0, 123, 255, 0.4),
            0 0 100px rgba(0, 123, 255, 0.4)
          `,
        }}
      ></div>
    </div>
  );
};

export default TopCenter;
