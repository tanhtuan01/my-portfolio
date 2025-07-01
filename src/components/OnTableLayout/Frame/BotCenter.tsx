import Table from "../Widget/Table";

const BotCenter = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: "100px",
        zIndex: 100,
      }}
    >
      <Table />
    </div>
  );
};

export default BotCenter;
