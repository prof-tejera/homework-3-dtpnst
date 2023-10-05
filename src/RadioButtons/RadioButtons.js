import { useState } from "react";
import "./RadioButtons.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  const elements = ["Apple", "Pear", "Orange"]

  return (
    <Panel backgroundColor="blue">
      {elements.map((element) => 
        <Button
          key={element}
          active={activeType === element}
          onClick={() => handleClick(element)}
          text={element}
        />
      )}
    </Panel>
  );
};

export default RadioButtons;
