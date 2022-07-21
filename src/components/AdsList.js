import React, { useState } from "react";
import { Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
import {
  MdOutlineAccessTime,
  MdOutlineLuggage,
  MdOutlineNoLuggage,
} from "react-icons/md";
import {
  TbSnowflake,
  TbSnowflakeOff,
  TbArrowRightCircle,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const AdsList = () => {
  const date = new Date();
  const dateRev = date
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");

  const [rideFrom, setRideFrom] = useState("");
  const [rideTo, setRideTo] = useState("");
  const [rideDate, setRideDate] = useState("");

  const gov = [
    "Ariana",
    "Béja",
    "Ben_Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "La_Manouba",
    "Le_Kef",
    "Mahdia",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi_Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  const GetRideFrom = gql`
    query GetFilters {
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
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GetRideFrom);
  if (loading) return <Spinner animation="border" size="xl" />;
  if (error) return <h2>Error 403</h2>;

  const filtred = data.ads.data.filter(
    (el) =>
      el.attributes.ridefrom.indexOf(rideFrom) !== -1 &&
      el.attributes.rideto.indexOf(rideTo) !== -1 &&
      el.attributes.ddate.indexOf(rideDate) !== -1
  );
  const handleReset = () => {
    setRideFrom("");
    setRideTo("");
    setRideDate("");
  };
  console.log(filtred);
  return (
    <>
      <Form className="bg-dark">
        <Row className="mx-auto">
          <Col xs={10} md={3} className=" mt-4 text-light mx-auto">
            <Form.Label>Du</Form.Label>
            <Form.Select
              value={rideFrom}
              onChange={(e) => {
                setRideFrom(e.target.value);
              }}
            >
              <option value="" disabled>
                Départ
              </option>
              {gov.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={10} md={3} className=" mt-4 text-light mx-auto">
            <Form.Label>Vers</Form.Label>
            <Form.Select
              value={rideTo}
              onChange={(e) => {
                setRideTo(e.target.value);
              }}
            >
              <option value="" disabled>
                Arrivé
              </option>
              {gov.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={10} md={3} className=" mt-4 text-light mx-auto">
            <Form.Label>Date de départ</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Date"
              min={dateRev}
              value={rideDate}
              onChange={(e) => {
                setRideDate(e.target.value);
              }}
            />
          </Col>
          <Col xs={10} md={3} className=" mt-4 text-light mx-auto">
            <Button
              className="text-light py-2 btn-custom"
              style={{ fontWeight: 500 }}
              onClick={() => {
                handleReset();
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col className="mt-5 "></Col>
        </Row>
      </Form>

      <Row xs={1} md={4} className="g-4 mt-4 mx-0">
        {filtred.map((el, idx) => (
          <Col key={idx}>
            <Link to={`/ad/${el.id}`} className="text-decoration-none">
              <Card className="bg-effect">
                <Card.Img
                  variant="top"
                  className="rounded-circle mx-auto img-thumbnail mt-4"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                    objectPosition: "100% 0",
                  }}
                  src={`http://192.168.1.149:1337${el.attributes.photo.data.attributes.url}`}
                />
                <Card.Body>
                  <Card.Title className="text-center text-light">
                    {el.attributes.name}
                  </Card.Title>
                  <Card.Text className="text-light text-center mb-1 fs-6">
                    Voiture: {el.attributes.vname}
                  </Card.Text>
                  <Card.Text className="text-light text-center mb-1 fs-6">
                    {`Départ: ${el.attributes.ddate.slice(0, 10)} `}
                  </Card.Text>
                  <Card.Text className="text-light text-center mb-1 fs-6">
                    {` ${el.attributes.ddate.slice(11, 16)} `}
                    <MdOutlineAccessTime style={{ marginBottom: 3 }} />
                  </Card.Text>
                  <Card.Text className="text-light text-center mb-2"></Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark text-center border-light">
                  <small
                    className="text-light fs-6"
                    style={{ fontWeight: 500 }}
                  >
                    {el.attributes.ridefrom.split("_").join(" ")}{" "}
                    <TbArrowRightCircle size={30} style={{ marginBottom: 3 }} />{" "}
                    {el.attributes.rideto}
                  </small>
                </Card.Footer>
                <Card.Footer className="bg-dark text-center border-light">
                  <small
                    className="text-light fs-6"
                    style={{ fontWeight: 500 }}
                  >
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
                  </small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AdsList;
