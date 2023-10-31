import React, { useState } from "react";
import { useEffect } from "react";
import InputGroup from "../filters/Category/InputGroup.js";
import Cards from "../cards/Cards.js";
function Location() {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-3 mb-3">
          <h1 className="text-center mb-3">
            Location:{" "}
            <span className="text-sky-500">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Dimension: {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center">
            Type: {type === "" ? "Unknown" : type}
          </h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3 mb-4">
            <h4 className="text-center mb-4">Pick Location</h4>
            <InputGroup name="Location" changeID={setID} total={126} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Cards page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
