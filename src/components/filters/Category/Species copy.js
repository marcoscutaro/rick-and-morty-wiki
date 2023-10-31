import React, { useState } from "react";
import FilterBTN from "../FilterBtn";

const Species = ({ updateSpecies, updatePageNumber }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion">
      <div className="border rounded">
        <button
          className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          Species
        </button>

        {isAccordionOpen && (
          <div className="grid grid-cols-1 gap-6 m-2">
            {species.map((item, index) => {
              return (
                <FilterBTN
                  name="status"
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateSpecies}
                  input={item}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Species;
