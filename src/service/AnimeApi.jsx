import axios from "axios";

const apiLink = "https://api.jikan.moe/";

export const allAnimeData = async () => {
  const data = await axios.get(`${apiLink}v4/anime?page=1&order_by=popularity`);
  return data.data;
};

export const airingAnimeData = async () => {
  const data = await axios.get(`${apiLink}v4/seasons/now`);
  return data.data;
};

export const popularAnimeData = async () => {
  const data = await axios.get(`${apiLink}v4/top/anime`);
  return data.data;
};

export const upcomingAnimeData = async () => {
  const data = await axios.get(`${apiLink}v4/seasons/upcoming`);
  return data.data;
};

export const getCharactersData = async (id) => {
  const data = await axios.get(
    `https://api.jikan.moe/v4/anime/${id}/characters`
  );
  return data.data;
};

export const getAnimeIdData = async (id) => {
  const data = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  return data.data;
};


