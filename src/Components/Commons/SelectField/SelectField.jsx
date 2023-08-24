import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";

const SelectField = ({ radiobuttonValue }) => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [airportsList, setAirportsList] = useState([]);
  const [from, setForm] = useState({
    cityName: "Select A City",
    airportName: "Click to choose an airport",
  });
  const [to, setTo] = useState({
    cityName: "Select A City 2",
    airportName: "Click to choose an airport",
  });

  const cityRef = useRef();
  const airportRef = useRef();

  useEffect(() => {
    fetch(
      "http://api.aviationstack.com/v1/cities?access_key=76c795fba0f1f230f3768a70454cb72b"
    )
      .then((res) => res.json())
      .then((data) => setCityList(data.data))
      .catch((err) => console.log(err));

    fetch(
      "http://api.aviationstack.com/v1/airports?access_key=76c795fba0f1f230f3768a70454cb72b"
    )
      .then((res) => res.json())
      .then((data) => setAirportsList(data.data))
      .catch((err) => console.log(err));
  }, []);
  // cityList?.forEach(({ city_name }) =>
  //     setForm({ ...from, cityName: city_name })
  //   );
  console.log(airportsList);

  const handleReverseCity = () => {
    if (from) {
      setForm(to);
    }
    if (to) {
      setTo(from);
    }
  };

  const handleSelectFormAirport = () => {
    const airportName = airportRef.current.innerText;
    const cityName = cityRef.current.innerText;
    setForm({ airportName, cityName });
    setDropDown(false);
  };
  const handleSelectToAirport = () => {
    const airportName = airportRef.current.innerText;
    const cityName = cityRef.current.innerText;
    setTo({ airportName, cityName });
    setDropDown2(false);
  };

  return (
    <div className=" flex col-span-12 lg:col-span-6  ">
      <div className="relative w-1/2">
        <div
          onClick={() => setDropDown(!dropDown)}
          className={`w-full flex flex-col justify-center border rounded-[1rem] px-3 py-1 cursor-pointer text-secondary ${
            dropDown ? "bg-gray-100" : ""
          }`}
        >
          <div>
            <small className="text-sm">From</small>
            <h2 className="text-xl  leading-8   font-medium">
              {from.cityName}
            </h2>
            <span className="text-xs">{from.airportName}</span>
          </div>
        </div>
        {radiobuttonValue !== "multyCity" && (
          <div
            onClick={handleReverseCity}
            className="p-2 cursor-pointer z-10 shadow-md bg-white border absolute  bottom-5 -right-5 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-primary  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              ></path>
            </svg>
          </div>
        )}

        <div
          className={`absolute border-t  w-[20rem]  z-10 bg-white text-secondary drop-shadow-2xl cursor-default rounded-md  top-full -left-7  md:left-0 ${
            dropDown ? "block" : "hidden"
          }`}
        >
          <div className="search w-full  flex flex-col">
            <input
              type="text"
              placeholder="Search here......."
              className="border-none py-2 px-3 rounded-tl-md rounded-tr-md outline-none focus:border-none focus:outline-none ring-0 focus:ring-0 text-sm"
            />
            <button
              onClick={handleSelectFormAirport}
              className="px-3 py-1 hover:bg-gray-200 flex items-center justify-between w-full border-b cursor-pointer "
            >
              <div className="left flex items-start flex-col">
                <p className="text-xs font-bold ">
                  <span ref={cityRef}>Anaa</span>, French Polynesia
                </p>
                <p className="text-xs" ref={airportRef}>
                  Anaa Airport
                </p>
              </div>
              <div className="rig">
                <p className="text-sm font-bold">AAA</p>
              </div>
            </button>
            <button
              onClick={handleSelectFormAirport}
              className="px-3 py-1 hover:bg-gray-200 flex items-center justify-between w-full border-b cursor-pointer "
            >
              <div className="left flex items-start flex-col">
                <p className="text-xs font-bold ">
                  <span ref={cityRef}>El Tarf</span>, Algeria
                </p>
                <p className="text-xs" ref={airportRef}>
                  El Mellah Airport
                </p>
              </div>
              <div className="rig">
                <p className="text-sm font-bold">AAA</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* ----- To */}
      <div className={`relative w-1/2`}>
        <div
          onClick={() => setDropDown2(!dropDown2)}
          className={`w-full flex flex-col justify-center border rounded-[1rem] px-3 pl-7 py-1 cursor-pointer text-secondary ${
            dropDown2 ? "bg-gray-100" : ""
          }`}
        >
          <div>
            <small className="text-sm">To</small>
            <h2 className="text-xl  leading-8   font-medium">{to.cityName}</h2>
            <span className="text-xs">{to.airportName}</span>
          </div>
        </div>
        <div
          className={`absolute border-t  w-[20rem]  z-10 bg-white text-secondary drop-shadow-2xl cursor-default rounded-md  top-full -left-7  md:left-0 ${
            dropDown2 ? "block" : "hidden"
          }`}
        >
          <div className="search w-full  flex flex-col">
            <input
              type="text"
              placeholder="Search here......."
              className="border-none py-2 px-3 rounded-tl-md rounded-tr-md outline-none focus:border-none focus:outline-none ring-0 focus:ring-0 text-sm"
            />
            <button
              onClick={handleSelectToAirport}
              className="px-3 py-1 hover:bg-gray-200 flex items-center justify-between w-full border-b cursor-pointer "
            >
              <div className="left flex items-start flex-col">
                <p className="text-xs font-bold ">
                  <span ref={cityRef}>Anaa</span>, French Polynesia
                </p>
                <p className="text-xs" ref={airportRef}>
                  Anaa Airport
                </p>
              </div>
              <div className="rig">
                <p className="text-sm font-bold">AAA</p>
              </div>
            </button>
            <button
              onClick={handleSelectToAirport}
              className="px-3 py-1 hover:bg-gray-200 flex items-center justify-between w-full border-b cursor-pointer "
            >
              <div className="left flex items-start flex-col">
              <p className="text-xs font-bold ">
                  <span ref={cityRef}>El Tarf</span>, Algeria
                </p>
                <p className="text-xs" ref={airportRef}>
                  El Mellah Airport
                </p>
              </div>
              <div className="rig">
                <p className="text-sm font-bold">AAA</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
