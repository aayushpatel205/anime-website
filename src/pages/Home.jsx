import React, { useEffect } from "react";
import Card from "../components/animeCards/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAnimePageData } from "../features/animePageSlice";
import { allAnimeData } from "../service/AnimeApi";
import { setAllData } from "../features/animeDataSlice";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAnimeData = async () => {
      const data = await allAnimeData();
      dispatch(setAllData(data.data));
    };
    getAnimeData();
  }, []);
  const animeData = useSelector((state) => state.allAnime);
  return (
    <div className="flex gap-5 flex-wrap justify-between px-5">
      {animeData.length > 0 ? (
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
  );
};

export default Home;
