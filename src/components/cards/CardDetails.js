import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CardDetails = () => {
  let { id } = useParams();
  let api_characters = `https://rickandmortyapi.com/api/character/${id}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, origin, location, gender, species, status, type } =
    fetchedData;
  useEffect(() => {
    (async function () {
      let data = await fetch(api_characters).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api_characters]);

  return (
    <div>
      <div className=" flex justify-center">
        <div className="flex flex-col items-center gap-4 shadow-md">
          <h1 className="text-1xl">{name}</h1>
          <img src={image} alt="img-fluid" />

          {(() => {
            if (status === "Dead") {
              return (
                <div className="inline-block px-2 py-1 text-lg font-semibold tracking-wide text-white bg-red-500 rounded-full ">
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className="inline-block px-2 py-1 text-lg font-semibold tracking-wide text-white bg-green-500 rounded-full ">
                  {status}
                </div>
              );
            } else {
              return (
                <div className="inline-block px-2 py-1 text-lg font-semibold tracking-wide text-white bg-gray-500 rounded-full ">
                  {status}
                </div>
              );
            }
          })()}
          <div className="mb-4 flex justify-start flex-col">
            <div className="justify-self-start">
              <span className="font-medium">Gender : </span>
              {gender}
            </div>
            <div className="justify-self-start">
              <span className="font-medium">Location: </span>
              {location?.name}
            </div>
            <div className="justify-self-start">
              <span className="font-medium">Origin: </span>
              {origin?.name}
            </div>
            <div className="justify-self-start">
              <span className="font-medium">Species: </span>
              {species}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
