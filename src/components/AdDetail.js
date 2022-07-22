import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Spinner, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import {
  TbSnowflake,
  TbSnowflakeOff,
  TbArrowRightCircle,
} from "react-icons/tb";
import {
  MdOutlineAccessTime,
  MdOutlineLuggage,
  MdOutlineNoLuggage,
} from "react-icons/md";
const AdDetail = () => {
  const { id } = useParams();
  const RideDetail = gql`
    query RideDetail {
      ads {
        data {
          id
          attributes {
            photo {
              data {
                attributes {
                  url
                }
              }
            }
            name
            ridefrom
            rideto
            ddate
            vname
            climation
            luggage
            phone
            sits
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(RideDetail);
  if (loading)
    return (
      <div className="d-flex justify-content-center ">
        <Spinner animation="border" size="lg" className="text-light my-5" />
      </div>
    );
  if (error) return <h2>Error 403</h2>;
  const adDet = data.ads.data.filter((el) => el.id === String(id));
  return (
    <div className="adsdetailcss">
      {adDet.map((el, i) => (
        <div className="container">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-4 bg-dark shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 lg-text-center text-light">
                {el.attributes.name}
              </h1>
              <div className="lead text-light fw-semibold">
                {el.attributes.ridefrom.split("_").join(" ")}
                <TbArrowRightCircle
                  size={30}
                  style={{ marginBottom: 2 }}
                />{" "}
                {el.attributes.rideto.split("_").join(" ")}
              </div>
              <div className="lead text-light">
                Voiture: {el.attributes.vname}
              </div>
              <div className="lead text-light">
                {`Départ: ${el.attributes.ddate.slice(0, 10)} `}{" "}
                <MdOutlineAccessTime style={{ marginBottom: 3 }} />{" "}
                {` ${el.attributes.ddate.slice(11, 16)} `}
              </div>
              <div className="lead text-light">
                Places disponibles: <strong>{el.attributes.sits}</strong>
                <div className="lead text-light">
                  Climatisation:{" "}
                  {el.attributes.climation ? (
                    <TbSnowflake />
                  ) : (
                    <TbSnowflakeOff className="text-danger" />
                  )}{" "}
                  | Valises:{" "}
                  {el.attributes.luggage ? (
                    <MdOutlineLuggage />
                  ) : (
                    <MdOutlineNoLuggage className="text-danger" />
                  )}
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 text"></div>
                <Button
                  type="button"
                  className="btn-primary btn-lg px-4 me-md-2 text-light fw-semibold mt-4"
                  href={`tel:${el.attributes.phone}`}
                >
                  <FaPhoneAlt
                    style={{ marginBottom: "0.15rem", marginRight: "0.25rem" }}
                  />{" "}
                  Appeler
                </Button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-lg">
              <img
                className="rounded-3 mb-5"
                src={`http://192.168.1.149:1337${el.attributes.photo.data.attributes.url}`}
                alt="Profile"
                style={{
                  width: "20rem",
                  height: "20rem",
                  objectFit: "cover",
                  objectPosition: "100% 0",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdDetail;
