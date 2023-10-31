import React, { useState } from "react";

const Accordion = (props) => {
  const [active, setActive] = useState(false); // Track active state

  const handletoggleActive = () => {
    setActive(!active); // Toggle active state
  };

  return (
    <div>
      <div className={`accordion-item ${active ? "is-active" : ""}`}>
        <div className="flex">
          <div className="w-full group-[.is-active]:font-bold ">
            {props.datas.gender}
            {/* Make sure you're accessing the correct property */}
          </div>
          <div
            className="w-full group-[.is-active]:rotate-[270deg]"
            onClick={handletoggleActive}
          >
            <button>open</button>
          </div>
          <div
            className={`overflow-hidden max-h-0 ${
              active ? "max-h-[100px]" : ""
            }`}
          >
            <p>{props.datas.genders}</p>
            {/* Make sure you're accessing the correct property */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
