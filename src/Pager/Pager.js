import { useState } from "react";
import "./Pager.css";
import Panel from "components/Panel/Panel";

const Pager = (numPages) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNum) => {
    setCurrentPage(pageNum)
  }

  return (
    <Panel backgroundColor="blue">
      <div className="pagination">
        {Array.from({ length: 10 }, (e, i) => 
        // eslint-disable-next-line
          <a 
            key={i+1} 
            href="#"  
            onClick={() => handleClick(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i+1}
          </a>
        )}
      </div>
    </Panel>
  )
};

export default Pager;
