import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filters = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div>
      <div className="w-3/4">
        <div className="ml text-center IBM-bold text-xl">Filter</div>
        <div className="text-center underline underline-offset-1 cursor-pointer">
          <p
            onClick={clear}
            className="pointer-events-none focus:pointer-events-auto"
          >
            clear filters
          </p>
        </div>
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus} // Change updateGender to updateStatus
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies} // Make sure you have a similar prop for Species
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filters;
