import React from "react";
import { useParams } from "react-router-dom";
import MediaDetailsHeader from "../components/MediaDetailsHeader";
import MediaInfos from "../components/MediaInfos";
import MediaCast from "../components/MediaCast";
import "../styles/pages/MediaDetailsPage.css";

const MediaDetailsPage = () => {
  const { id } = useParams();
  const mediaType = window.location.pathname.includes("/movie") ? "movie" : "tv";

  return (
    <>
      <MediaDetailsHeader />
      <div className="media-details-page-container">
        <div className="media-details-content">
          <div className="media-cast">
            <MediaCast mediaType={mediaType} mediaId={id} />
           
          </div>
          
          <div className="media-infos">
          <MediaInfos mediaType={mediaType} mediaId={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaDetailsPage;
