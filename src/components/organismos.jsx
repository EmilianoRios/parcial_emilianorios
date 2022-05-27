import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../services/ministerioApi";
import { Markup } from 'interweave';

// ---- CHAKRA ----
import { Link, Text, Container } from "@chakra-ui/react";

// ---- REACT ROUTER ----
import { Link as ReactRouter } from "react-router-dom";

export const Organismos = () => {
  const [organismos, setOrganismos] = useState(null);

  useEffect(() => {
    API.institutos(
      "https://www.cultura.gob.ar/api/v2.0/organismos/?format=json"
    )
      .then(setOrganismos)
      .catch(console.log);
  }, []);

  return (
    <>
      <Link as={ReactRouter} to={`/`}>
        <h1>Inicio</h1>
      </Link>
      {organismos?.results.map((result) => (
        <Container pb={3}>
          <Text fontSize='xl'>{result.nombre}</Text>
          <Markup content={result.descripcion}></Markup>
        </Container>
      ))}
    </>
  );
};
