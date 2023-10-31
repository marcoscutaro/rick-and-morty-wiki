import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Navbar from "./components/Navbar/Navbar";
import Location from "./components/pages/Location";
import Episodes from "./components/pages/Episodes";
import CardDetails from "./components/cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  const api_characters = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api_characters).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api_characters]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="flex items-center justify-center text-black IBM-bold text-1xl">
          Characters
        </h1>
        <div className="flex">
          <div className="w-1/4">
            <Filters
              pageNumber={pageNumber}
              status={status}
              updateStatus={updateStatus}
              updateGender={updateGender}
              updateSpecies={updateSpecies}
              updatePageNumber={updatePageNumber}
            />
          </div>
          <div className="w-3/4">
            <div className="flex">
              <div className="w-8/12">
                <Search
                  setSearch={setSearch}
                  updatePageNumber={updatePageNumber}
                />
                <Cards page="/" results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
    </div>
  );
};

export default App;
