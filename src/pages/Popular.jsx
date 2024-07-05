import React, { useEffect } from "react";
import { popularAnimeData } from "../service/AnimeApi";
import Card from "../components/animeCards/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPopularData } from "../features/animeDataSlice";
import Loader from "../components/Loader/Loader";
import { setAnimePageData } from "../features/animePageSlice";

const Popular = () => {
  const animeData = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularData = async () => {
      const data = await popularAnimeData();
      dispatch(setPopularData(data.data));
    };
    getPopularData();
  },[]);
  return (
    <div className="justify-start flex flex-col gap-4 px-5">
      <div className="border-b-2 border-gray-600 p-1 text-lightBlue flex justify-between items-center">
        <span className="text-xl tracking-wide font-medium">POPULAR</span>
      </div>
      <div className="flex flex-wrap gap-7 justify-start">
        {animeData?.length > 0 ? (
          animeData[0]?.map((element) => {
            return (
              <Link
                to={`/card/${element.mal_id}`}
                onClick={() => {
                  dispatch(setAnimePageData(element));
                }}
              >
                <Card data={element} />
              </Link>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Popular;
