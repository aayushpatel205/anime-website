import React, { useEffect } from "react";
import { airingAnimeData } from "../service/AnimeApi";
import { Link } from "react-router-dom";
import Card from "../components/animeCards/Card";
import { useDispatch, useSelector } from "react-redux";
import { setAiringData } from "../features/animeDataSlice";
import Loader from "../components/Loader/Loader";

const Airing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAiringData = async () => {
      const data = await airingAnimeData();
      dispatch(setAiringData(data.data));
    };
    getAiringData();
  }, []);

  const animeData = useSelector((state) => state.airingData);
  return (
    <div className="justify-start flex flex-col gap-4 px-5">
      <div className="border-b-2 border-gray-600 p-1 text-lightBlue flex justify-between items-center">
        <span className="text-xl uppercase tracking-wide font-medium">
          AIRING
        </span>
      </div>
      <div className="flex flex-wrap gap-7 justify-start">
        {animeData.length > 0 ? (
          animeData[0].map((element) => {
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

export default Airing;
