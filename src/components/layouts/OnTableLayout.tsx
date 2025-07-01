import "../../assets/css/OnTableLayOut.scss";
import BotCenter from "../OnTableLayout/Frame/BotCenter";
import BotLeft from "../OnTableLayout/Frame/BotLeft";
import BotRight from "../OnTableLayout/Frame/BotRight";
import MidCenter from "../OnTableLayout/Frame/MidCenter";
import MidLeft from "../OnTableLayout/Frame/MidLeft";
import MidRight from "../OnTableLayout/Frame/MidRight";
import TopCenter from "../OnTableLayout/Frame/TopCenter";
import TopLeft from "../OnTableLayout/Frame/TopLeft";
import TopRight from "../OnTableLayout/Frame/TopRight";

const OnTableLayout = () => {
  return (
    <div className="room-view">
      <div className="room-container">
        <div className="relative top-left">
          <TopLeft />
        </div>
        <div className="relative top-center">
          <TopCenter />
        </div>
        <div className="relative top-right">
          <TopRight />
        </div>
        <div className="relative mid-left">
          <MidLeft />
        </div>
        <div className="relative mid-center">
          <MidCenter />
        </div>
        <div className="relative mid-right">
          <MidRight />
        </div>
        <div className="relative bot-left">
          <BotLeft />
        </div>
        <div className="relative bot-center">
          <BotCenter />
        </div>
        <div className="relative bot-right">
          <BotRight />
        </div>
      </div>
    </div>
  );
};

export default OnTableLayout;
