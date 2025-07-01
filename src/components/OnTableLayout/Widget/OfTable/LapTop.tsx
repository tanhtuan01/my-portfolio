const LapTop = () => {
  return (
    <div
      style={{
        width: 200,
        height: 100,
        margin: "0 auto",
        position: "relative",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Màn hình */}
      <div
        style={{
          width: "100%",
          height: 180,
          background: "#111",
          border: "2px solid #666",
          borderRadius: "8px",
          padding: 8,
          boxSizing: "border-box",
          position: "absolute",
          top: -140,
          transform: "rotateY(9deg) rotateX(-60deg)",
          transformOrigin: "bottom center",
          boxShadow: "0 25px 30px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "#222",
            borderRadius: 4,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 14,
          }}
        >
          19H00
        </div>
      </div>
      {/* Bản lề */}
      <div
        style={{
          width: "90%",
          height: 5,
          background: "linear-gradient(to bottom, #555, #222)",
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%) rotateX(20deg)",
          borderRadius: 6,
          zIndex: 5,
          // boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
          boxShadow: "inset rgba(0, 0, 0, 0.5) -20px -14px 8px 0px;",
        }}
      />

      {/* Bàn phím */}
      <div
        style={{
          width: "98%",
          height: 60,
          background: "#444",
          borderRadius: "6px",
          position: "absolute",
          top: 37,
          left: 0,
          transform: "rotateX(27deg) rotateY(2deg)",
          transformOrigin: "bottom center",
          boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
          zIndex: 1,
          padding: 6,
          boxSizing: "border-box",
        }}
      >
        {/* Các Phím */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: 2,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 6,
                background: "#666",
                borderRadius: 2,
              }}
            />
          ))}
        </div>

        {/* Touchpad */}
        <div
          style={{
            width: 45,
            height: 18,
            background: "#333",
            margin: "8px auto 0",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
};

export default LapTop;
