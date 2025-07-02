import OnTableCenter from "./OfTable/OnTableCenter";
import OnTableLeft from "./OfTable/OnTableLeft";
import OnTableRight from "./OfTable/OnTableRight";

const Table = () => {
  return (
    <div
      className="table-widget cursor-pointer"
      style={{
        width: 600,
        aspectRatio: 3 / 1,
        position: "absolute",
        border: "1px solid black",
        background: "rgba(100, 100, 100, 0.5)",
        transformStyle: "preserve-3d",
        transform: "rotateX(10deg) translateX(-50%)",
        left: "50%",
        bottom: "20%",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        zIndex: 10,
      }}
    >
      {/* Mặt bàn */}
      <div
        style={{
          padding: 10,
          width: "100%",
          height: "100%",
          background: "rgb(100, 100, 100)",
          borderRadius: "10px",
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotateX(0deg)",
          // overflow: "hidden",
        }}
      >
        <div className="on-table flex h-full">
          <div className="on-table-left flex-1">
            <OnTableLeft />
          </div>
          <div className="on-table-center flex-1">
            <OnTableCenter />
          </div>
          <div className="on-table-right flex-1">
            <OnTableRight />
          </div>
        </div>
      </div>
      {/* Các chân bàn */}
      {/* <div
        className="leg-top-left"
        style={{
          position: "absolute",
          width: "10px",
          height: "20px",
          background: "rgba(100, 100, 100, 0.7)",
          left: "17%",
          bottom: "-20px",
          transform: "rotateX(-10deg)",
        }}
      ></div>
      <div
        className="leg-top-right"
        style={{
          position: "absolute",
          width: "10px",
          height: "20px",
          background: "rgba(100, 100, 100, 0.7)",
          right: "17%",
          bottom: "-20px",
          transform: "rotateX(-10deg)",
        }}
      ></div> */}
      <div
        className="leg-bot-left"
        style={{
          position: "absolute",
          width: "10px",
          height: "100px",
          background: "rgba(100, 100, 100, 0.7)",
          left: "13%",
          bottom: "-20%",
          transform: "rotateX(-5deg)",
        }}
      ></div>
      <div
        className="leg-bot-right"
        style={{
          position: "absolute",
          width: "10px",
          height: "100px",
          background: "rgba(100, 100, 100, 0.7)",
          right: "13%",
          bottom: "-20%",
          transform: "rotateX(-5deg)",
        }}
      ></div>
    </div>
  );
};

export default Table;
