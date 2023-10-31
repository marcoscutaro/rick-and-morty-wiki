import React, { useState } from "react";
import FilterBTN from "../FilterBtn";

const Gender = ({ updateGender, updatePageNumber }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion">
      <div className="border rounded">
        <button
          className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          Gender
        </button>

        {isAccordionOpen && (
          <div className="grid grid-cols-1 gap-6 m-2">
            {genders.map((item, index) => {
              return (
                <FilterBTN
                  name="gender"
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateGender}
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

export default Gender;
