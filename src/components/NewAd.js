import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
const NewAd = () => {
  const date = new Date();
  const dateRev = date
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [vname, setVname] = useState("");
  const [phone, setPhone] = useState(0);
  const [ddate, setDdate] = useState("");
  const [sits, setSits] = useState(0);
  const [ridefrom, setRideFrom] = useState("");
  const [rideto, setRideTo] = useState("");
  const [climation, setClimation] = useState(false);
  const [luggage, setLuggage] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const Create_New_Ad = gql`
    mutation CreateAd($data: AdInput!) {
      createAd(data: $data) {
        data {
          attributes {
            name
            age
            vname
            ddate
            phone
            ridefrom
            rideto
            luggage
            climation
            sits
            photo {
              data {
                id
              }
            }
          }
        }
      }
    }
  `;
  const UPLOAD = gql`
    mutation Upload($file: Upload!) {
      upload(file: $file) {
        data {
          id
        }
      }
    }
  `;
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

  const [createAd] = useMutation(Create_New_Ad);
  const [upload] = useMutation(UPLOAD, {
    onCompleted: (file) => setPhotoId(file),
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    createAd({
      variables: {
        data: {
          name: name,
          age: age,
          vname: vname,
          ddate: ddate,
          phone: phone,
          ridefrom: ridefrom,
          rideto: rideto,
          luggage: luggage,
          climation: climation,
          sits: sits,
          photo: photoId.upload.data.id,
        },
      },
    });
    navigate("/");
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-5"></Row>
        <Row className="mb-3 text-light">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Nom et Prénom</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Saief Brahim"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Control.Feedback>Cela semble bon !</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="27"
              onChange={(e) => {
                setAge(Number(e.target.value));
              }}
            />
            <Form.Control.Feedback>Cela semble bon !</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Numéro de Téléphone</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="tel"
                placeholder="21000000"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setPhone(Number(e.target.value));
                }}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez Saisir votre numéro
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Votre Photo</Form.Label>
            <Form.Control
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              placeholder="Votre Photo"
              onChange={(e) => {
                upload({ variables: { file: e.target.files[0] } });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Veuillez selectionner une photo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4 text-light">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Date de Départ</Form.Label>
            <Form.Control
              type="datetime-local"
              min={dateRev}
              placeholder={dateRev}
              required
              onChange={(e) => {
                setDdate(`${e.target.value}:00.000Z`);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer une date!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Modèle de Voiture</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Polo 7"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setVname(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez Saisir le modèle de voiture!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Places Disponibles</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                placeholder="4"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setSits(Number(e.target.value));
                }}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez Saisir les Places Disponibles!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3 text-light">
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Du</Form.Label>
            <InputGroup hasValidation>
              <Form.Select
                placeholder="4"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setRideFrom(e.target.value);
                }}
                defaultValue=""
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
              <Form.Control.Feedback type="invalid">
                Veuillez Selectionner le départ
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Vers</Form.Label>
            <InputGroup hasValidation>
              <Form.Select
                placeholder="4"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setRideTo(e.target.value);
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Arrivé
                </option>
                {gov.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Veuillez Selectionner l'arrivé'
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="text-center"
            as={Col}
            md="3"
            controlId="validationCustomUsername"
          >
            <Form.Label>Climatisation</Form.Label>
            <InputGroup hasValidation>
              <Form.Check
                type="switch"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setClimation(e.target.checked);
                }}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="text-center"
            as={Col}
            md="3"
            controlId="validationCustomUsername"
          >
            <Form.Label>Valises</Form.Label>
            <InputGroup hasValidation>
              <Form.Check
                type="switch"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setLuggage(e.target.checked);
                }}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 text-light d-flex justify-content-center">
          <Form.Check
            required
            label="Accepter les termes et conditions"
            feedback="Vous devez accepter avant de soumettre."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="text-light d-flex mx-auto" type="submit">
          Confirmer
        </Button>
      </Form>
    </Container>
  );
};

export default NewAd;
