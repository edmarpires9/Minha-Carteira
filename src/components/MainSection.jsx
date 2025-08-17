import Card from "./Card";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="main-section-fit-content">
        <h1 className="main-section-h1">
          Engage your goals, right inside your app
        </h1>
        <h2 className="main-section-h2">Collect goals that make you grow</h2>
      </div>
        <Card/>
    </div>
  );
};

export default MainSection;
