import "../../assets/css/OnTableLayOut.scss";
import WallBottom from "./WallBottom";
import WallLeft from "./WallLeft";
import WallRight from "./WallRight";
import WallTop from "./WallTop";

const OnTableLayout = () => {
  return (
    <div className="room-view">
      <WallTop />
      <WallLeft />
      <WallRight />
      <WallBottom />
    </div>
  );
};

export default OnTableLayout;
