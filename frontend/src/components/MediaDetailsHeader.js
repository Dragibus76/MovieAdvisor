import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMediaDetails,
  fetchTvShowDetails,
  fetchCredits,
  fetchVideos,
} from "../api/ApiCalls";
import { BsDot, BsHeartFill, BsPlayFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import dateFormater from "../utils/dateFormater";
import "../styles/components/MediaDetailsHeader.css";
import CustomCircularProgressbar from "../components/CustomCircularProgressbar";

const MediaDetailsHeader = () => {
  const { id } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);
  const isMoviePage = window.location.pathname.includes("/movie");
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchDetails = isMoviePage ? fetchMediaDetails : fetchTvShowDetails;
    const fetchCreditDetails = fetchCredits;

    Promise.all([
      fetchDetails(isMoviePage ? "movie" : "tv", id),
      fetchCreditDetails(isMoviePage ? "movie" : "tv", id),
      fetchVideos(isMoviePage ? "movie" : "tv", id),
    ])
      .then(([detailsResponse, creditsResponse, videosResponse]) => {
        setMediaDetails({
          ...detailsResponse,
          credits: creditsResponse,
          videos: videosResponse,
        });
      })
      .catch((error) => console.error(error));
  }, [id, isMoviePage]);

  if (!mediaDetails) {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <FaSpinner />
        </div>
      </div>
    );
  }

  const year = mediaDetails.release_date?.split("-")[0];
  const title = mediaDetails.title || mediaDetails.name;
  const genres = mediaDetails.genres.map((genre) => genre.name);
  const userRatingPercentage = Math.round(mediaDetails.vote_average * 10);

  let progressClass = "progress-0";
  if (userRatingPercentage >= 25) progressClass = "progress-25";
  if (userRatingPercentage >= 50) progressClass = "progress-50";
  if (userRatingPercentage >= 75) progressClass = "progress-75";
  if (userRatingPercentage === 100) progressClass = "progress-100";

  const handlePlayClick = (videoKey) => {
    setTrailerUrl(`https://www.youtube.com/embed/${videoKey}`);
    setShowTrailer(true);
  };

  return (
    <div className="media-details-container">
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${mediaDetails.poster_path}`}
          alt={title}
        />
      </div>
      <div className="info">
        <h2>
          {title}{" "}
          <span className="release-year">
            ({isMoviePage ? year : mediaDetails.first_air_date?.split("-")[0]})
          </span>
        </h2>
        <div className="genres">
          {genres.map((genre, index) => (
            <span key={index} className="genre">
              {genre}
            </span>
          ))}
          {isMoviePage ? (
            <span className="duration">
              <BsDot className="dot-icon" />
              {mediaDetails.runtime} min
            </span>
          ) : (
            <span className="duration">
              <BsDot className="dot-icon" />
              {mediaDetails.episode_run_time} min par épisode
              {mediaDetails.number_of_seasons > 0 && (
                <>
                  <BsDot className="dot-icon" />
                  {`${mediaDetails.number_of_seasons} saison${
                    mediaDetails.number_of_seasons > 1 ? "s" : ""
                  }`}
                </>
              )}
              {mediaDetails.number_of_episodes > 0 && (
                <>
                  <BsDot className="dot-icon" />
                  {`${mediaDetails.number_of_episodes} épisode${
                    mediaDetails.number_of_episodes > 1 ? "s" : ""
                  }`}
                </>
              )}
            </span>
          )}
          <span className="release-date">
            <BsDot className="dot-icon" />
            {isMoviePage
              ? dateFormater(mediaDetails.release_date)
              : dateFormater(mediaDetails.first_air_date)}
          </span>
        </div>
        <div className="user-rating">
          <div className="progress-circle">
            <CustomCircularProgressbar percentage={userRatingPercentage} />
            <div className="icons">
              <div className="icon-circle">
                <BsHeartFill className="icon-heart" />
              </div>
              <div
                className="icon-circle"
                onClick={() =>
                  handlePlayClick(mediaDetails.videos.results[0].key)
                }
              >
                <BsPlayFill className="icon-play" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="tagline">{mediaDetails.tagline}</p>
        </div>
        <div>
          <h4>Synopsis :</h4>
          <p className="synopsis">{mediaDetails.overview}</p>
        </div>

        <div>
          <h4>Réalisateur :</h4>
          {isMoviePage
            ? mediaDetails.credits &&
              mediaDetails.credits.crew && (
                <p>
                  {mediaDetails.credits.crew
                    .filter((crew) => crew.job === "Executive Producer")
                    .map((crew) => crew.name)
                    .join(", ")}
                </p>
              )
            : mediaDetails.created_by &&
              mediaDetails.created_by.length > 0 && (
                <p>{mediaDetails.created_by[0].name}</p>
              )}
        </div>
      </div>
      {showTrailer && (
        <div className="overlay">
          <iframe
            title="Trailer"
            src={trailerUrl}
            frameBorder="0"
            allowFullScreen
            className="trailer-iframe"
          ></iframe>
          <div className="close-button" onClick={() => setShowTrailer(false)}>
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaDetailsHeader;
