import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { allAnimeData } from "../service/AnimeApi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, [input]);
  const fetchData = async () => {
    const data1 = await allAnimeData();
    const results = data1.data.filter((element) => {
      return element.title.toLowerCase().includes(input);
    });
    setData(results);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black h-[60px] text-white font-medium pl-4 pr-4 flex items-center justify-evenly mb-4 sticky top-0 z-20">
        <span
          className="text-2xl font-bold uppercase cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-lightBlue">Ani</span>Verse.
        </span>
        <div className="flex gap-10 max-[500px]:hidden">
          <NavLink to={"/popular"}>
            <span className="text-lg w-[90px] hover:text-lightBlue">
              Popular
            </span>
          </NavLink>
          <NavLink to={"/airing"}>
            <span className="text-lg w-[90px] hover:text-lightBlue">
              Airing
            </span>
          </NavLink>
          <NavLink to={"/upcoming"}>
            <span className="text-lg w-[90px] hover:text-lightBlue">
              Upcoming
            </span>
          </NavLink>
        </div>
        <div className="relative">
          <div className="h-[28px] bg-lightGray flex items-center pl-2 pr-2 gap-2 rounded-md max-[500px]:hidden w-[270px] justify-between">
            <input
              value={input}
              className="h-full bg-lightGray text-sm outline-none font-normal"
              placeholder="Search keyword..."
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <FaSearch size={17} className="cursor-pointer" />
          </div>
          <div
            className="flex flex-col gap-1 absolute top-[40px] bg-lightGray w-[270px] overflow-y-auto no-scrollbar rounded-lg transition-all duration-200 p-2"
            style={{ maxHeight: input ? 220 : 0, padding: input ? 8 : 0 }}
          >
            {data && data.length > 0 ? (
              data?.map((element) => {
                return (
                  <Link
                    to={`/card/${element.mal_id}`}
                    onClick={() => {
                      setInput("");
                    }}
                    className="hover:bg-lightBlue rounded-md px-2 py-1 flex justify-between items-center cursor-pointer"
                  >
                    <span className="w-[170px]">
                      {element.title}
                    </span>
                    <img
                      src={element?.images.webp.image_url}
                      className="h-[40px] w-[40px] rounded-xl"
                    />
                  </Link>
                );
              })
            ) : (
              <span className="text-white p-2">No Anime Available !!</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
