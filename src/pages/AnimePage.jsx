import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getAnimeIdData, getCharactersData } from "../service/AnimeApi";
import { useDispatch } from "react-redux";
import {
  setAnimePageData,
  setCharactersData,
} from "../features/animePageSlice";

const AnimePage = () => {
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    const getData = async () => {
      const animeData = await getAnimeIdData(id.card);
      const charactersData = await getCharactersData(id.card);
      dispatch(setAnimePageData(animeData.data));
      dispatch(setCharactersData(charactersData.data));
    };
    getData();
  }, [id]);

  const data = useSelector((state) => state.animePage);
  return (data[0] && data[1]) ? (
    <div className="flex flex-col gap-8">
      <div className="p-5 flex gap-7 justify-center">
        <div className="h-[385px] w-[230px] rounded-lg overflow-hidden">
          <img
            src={data[0]?.images.jpg.large_image_url}
            className="h-full object-fill"
          />
        </div>

        <div className="flex flex-col w-2/3 gap-3">
          <span className="text-white text-3xl font-medium">
            {data[0].title_english ? data[0].title_english : data[0].title_synonyms[0]}
          </span>
          <span className="text-white line-clamp-6">{data[0]?.synopsis}</span>

          <div className="text-white flex justify-between">
            <div className="flex flex-col gap-1">
              <span className="flex gap-3">
                <span className="font-semibold">Type:</span>
                {data[0].type}
              </span>
              <span className="flex gap-3">
                <span className="font-semibold">Studios:</span>
                {data[0].studios.length > 0 ? data[0].studios[0].name : "Unknown"}
              </span>
              <span className="flex gap-3">
                <span className="font-semibold">Date aired:</span>
                {data[0].aired.string}
              </span>
              <span className="flex gap-3">
                <span className="font-semibold">Status:</span>
                {data[0].status}
              </span>

              <span className="flex gap-3">
                <span className="font-semibold">Genre:</span>
                <span className="flex gap-2">
                  {data[0].genres.map((element) => {
                    return <span>{element.name}</span>;
                  })}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex gap-3">
                <span className="font-semibold">Score:</span>
                {data[0].score ? data[0].score : "Unknown"}
              </span>
              <span className="flex gap-3">
                <span className="font-semibold">Rating:</span>
                {data[0].rating ? data[0].rating : "Unknown"}
              </span>
              <span className="flex gap-3">
                <span className="font-semibold">Duration:</span>
                {data[0].duration}
              </span>
              <span
                className="flex gap-3"
                style={{ display: data[0].type === "Movie" ? "none" : "flex" }}
              >
                <span className="font-semibold">Episodes:</span>
                {data[0].episodes ? data[0].episodes : "Unknown"}
              </span>
            </div>
          </div>

          <a className="self-start" target="_blank" href={data[0].trailer.url}>
            <div
              className="bg-lightBlue text-white py-1 px-2 rounded-md font-medium flex justify-center items-center"
              style={{ display: data[0].trailer.url ? "block" : "none" }}
            >
              <span>Watch Trailer</span>
            </div>
          </a>
        </div>
      </div>
      <div className="p-10 flex flex-col items-start gap-3">
        <div className="py-1.3 px-3 border-l-4 border-lightBlue">
          <span className="text-lightBlue text-3xl uppercase tracking-wider font-medium">
            CHARACTERS
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-4 w-full place-items-center" style={{display: data[1].length > 0 ? "grid" : "none"}}>
          {data[1].length > 0 ? data[1].map((element) => {
            return (
              <div className="flex flex-col gap-1 w-[170px] p-2">
                <img
                  src={element.character.images.jpg.image_url}
                  className="h-[240px] w-[170px]"
                />
                <span className="text-white line-clamp-2">{element.character.name}</span>
                <span className="text-lightBlue line-clamp-2">{element.role}</span>
              </div>
            );
          }) : <Loader/>}
        </div>
        {!(data[1].length > 0) && <span className={`text-2xl text-lightBlue pl-5 pt-5`}>NO CONTENT AVAILABLE</span>}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default AnimePage;
