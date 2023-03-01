import "./Cinderace.scss";

import GridMaker from "../utils/GridMaker";
import i18n from "../lang/i18n.json";

const Cinderace = () => {
  const LANG = navigator.language.toUpperCase();
  return (
    <div className="page">
      <h1>#0815 {i18n?.name?.cinderace[LANG] || i18n.name.cinderace["EN"] }</h1>
      {GridMaker({ width: 56, height: 56, clickedCell: () => {
        console.log("heyy!")
      } })}
    </div>
  );
};

export default Cinderace;
