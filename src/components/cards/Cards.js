import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ results, page }) => {
  let display;

  if (results) {
    // Group the results into rows of 3
    const rows = [];
    for (let i = 0; i < results.length; i += 3) {
      rows.push(results.slice(i, i + 3));
    }

    display = rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex mb-4">
        {row.map((x) => {
          let { id, name, image, location, status } = x;
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`${page}${id}`}
              key={id}
              className="w-1/3 p-4  relative shadow text-black	"
            >
              <div className="">
                <img src={image} alt="" className="w-full h-auto" />
                <div className="x">
                  <div className="text-2xl mb-4 font-bold">{name}</div>
                  <div className="text-base">Last location</div>
                  <div className="text-sm">{location.name}</div>
                </div>
              </div>

              {(() => {
                if (status === "Dead") {
                  return (
                    <div className="inline-block px-2 py-1 text-sm font-semibold tracking-wide text-white bg-red-500 rounded-full absolute top-5 right-5">
                      Dead
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className="inline-block px-2 py-1 text-sm font-semibold tracking-wide text-white bg-green-500 rounded-full absolute top-5 right-5">
                      Alive
                    </div>
                  );
                } else {
                  return (
                    <div className="inline-block px-2 py-1 text-sm font-semibold tracking-wide text-white bg-gray-500 rounded-full absolute top-5 right-5">
                      Unknow
                    </div>
                  );
                }
              })()}
            </Link>
          );
        })}
      </div>
    ));
  } else {
    display = "No Characters found";
  }

  return (
    <div>
      <div>{display}</div>
    </div>
  );
};

export default Cards;
