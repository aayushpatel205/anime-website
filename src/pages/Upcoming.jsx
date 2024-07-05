import React, { useEffect } from "react";
import { upcomingAnimeData } from "../service/AnimeApi";
import { Link } from "react-router-dom";
import Card from "../components/animeCards/Card";
import { useDispatch, useSelector } from "react-redux";
import { setUpcomingData } from "../features/animeDataSlice";
import Loader from "../components/Loader/Loader";

const Upcoming = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingData = async () => {
      const data = await upcomingAnimeData();
      dispatch(setUpcomingData(data.data));
    };
    getUpcomingData();
  }, []);

  const animeData = useSelector((state) => state.upcomingAnime);
  return (
    <div className="justify-start flex flex-col gap-4 px-5">
      <div className="border-b-2 border-gray-600 p-1 text-lightBlue flex justify-between items-center">
        <span className="text-xl tracking-wide font-medium">
          UPCOMING
        </span>
      </div>
      <div className="flex flex-wrap gap-7 justify-start">
        {animeData.length > 0 ? (
          animeData[0].map((element) => {
            return (
              <Link
                to={`/card/${element.mal_id}`}
                onClick={() => {
                  console.log(element);
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

export default Upcoming;
