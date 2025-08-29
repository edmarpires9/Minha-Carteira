import "./Overview.css";

const Overview = ({iconPath, title, info}) => {
  
  return (
    <div className="app-name">
      <div className="app-logo-and-title">
        <img src={iconPath} width="32px" alt="logo" />
        {info ? <p>{title + ' R$ ' + info}</p> : <p>{title}</p>}
        
      </div>
    </div>
  );
};

export default Overview;
