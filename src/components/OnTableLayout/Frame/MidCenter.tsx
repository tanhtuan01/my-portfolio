const MidCenter = () => {
  return (
    <div className="relative w-full h-full z-1">
      <div className="view-window absolute text-gray-500 top-0 left-0 right-0 bottom-0">
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://tse2.mm.bing.net/th/id/OIP.LJq43LZkVjSHlYn-_K6oRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        />
      </div>
      <div
        className="window-pane h-full flex absolute z-2 top-0 left-0 right-0 bottom-0"
        style={{
          border: "2px solid #ccc",
        }}
      >
        <div
          className="window-pane-left h-full flex-1"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></div>
        <div
          className="window-pane-center flex-1"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></div>
        <div
          className="window-pane-right flex-1"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></div>
      </div>
    </div>
  );
};

export default MidCenter;
