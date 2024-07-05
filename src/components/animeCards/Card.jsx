import React from "react";

const Card = ({ data }) => {
  const isoString = data?.aired.from;
  const date = new Date(isoString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-GB", options);
  return (
    <div className="flex flex-col gap-1 w-[160px] border-border-white cursor-pointer card">
      <div style={{overflow: "hidden"}} className="rounded-md">
        <img
          src={data?.images.webp.image_url}
          className="h-[220px] w-[160px] mainImage"
        />
      </div>
      <span className="text-white text-sm">{data.title_english ? data.title_english : data.title_synonyms[0]}</span>
      <span className="text-sm text-lightBlue">{formattedDate}</span>
    </div>
  );
};

export default Card;
