import React, { useState, useEffect } from "react";
import { fetchMediaDetails } from "../api/ApiCalls";
import {
  convertToEuro,
  translateStatus,
  getPopularityIcon,
  translateCountryName,
} from "../utils/dataFormater";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import "../styles/components/MediaInfos.css";

const MediaInfos = ({ mediaType, mediaId }) => {
  const [mediaDetails, setMediaDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMediaDetails(mediaType, mediaId);
        setMediaDetails(details);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching media details:", error);
      }
    };

    fetchDetails();
  }, [mediaType, mediaId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MediaInfosContainer">
      <h2 className="MediaInfosTitle">Details</h2>
      <hr />
      <div className="MediaInfosDetails">
        <p>
          <span>Titre Original :</span>{" "}
          {mediaDetails.original_title || mediaDetails.original_name}
        </p>
        <p>
          <span>Titre :</span> {mediaDetails.title || mediaDetails.name}
        </p>
        <p>
          <span>Langue original :</span> {mediaDetails.original_language}
        </p>
        <p>
          <span>Popularité :</span> {getPopularityIcon(mediaDetails.popularity)}
        </p>
        <p>
          <span>Site Web : </span>
          <button className="open-homepage-button">
            <Link
              to={mediaDetails.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiWorld className="linkIcon" />
            </Link>
          </button>
        </p>
        <p>
          <span>Budget :</span>{" "}
          {mediaDetails.budget > 0
            ? `${convertToEuro(mediaDetails.budget)} €`
            : "Information non disponible"}
        </p>
        <p>
          <span>Revenu :</span>{" "}
          {mediaDetails.revenue > 0
            ? `${convertToEuro(mediaDetails.revenue)} €`
            : "Information non disponible"}
        </p>
        <p>
          <span>statut :</span> {translateStatus(mediaDetails.status)}
        </p>
        <p>
          <span>Note Moyenne :</span> {mediaDetails.vote_average}
        </p>
        <p>
          <span>Nombre de vote :</span> {mediaDetails.vote_count}
        </p>
      </div>

      <div className="ProductionCompanies">
        <h2 className="ProductionCompaniesTitle">Société de production</h2>
        <hr />
        <div className="ProductionCompaniesList">
          {mediaDetails.production_companies.map((company) => (
            <div key={company.id} className="ProductionCompany">
              {company.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                />
              ) : (
                <div className="NoLogo">Aucun Logo</div>
              )}
              <p>
                <strong>Nom:</strong> {company.name}
              </p>
              <p>
                <strong>Pays:</strong>{" "}
                {translateCountryName(company.origin_country)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="ProductionCountries">
        <h2 className="ProductionCountriesTitle">Pays de Production</h2>
        <hr />
        <div className="ProductionCountriesList">
          {mediaDetails.production_countries.map((country) => (
            <div key={country.iso_3166_1} className="ProductionCountry">
              <p>
                <strong>Pays:</strong> {translateCountryName(country.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaInfos;
