import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../services/ministerioApi";
import { Markup } from 'interweave';

// ---- CHAKRA ----
import { Link, Text, Container } from "@chakra-ui/react";

// ---- REACT ROUTER ----
import { Link as ReactRouter } from "react-router-dom";

export const Tramites = () => {
  const [tramites, setTramites] = useState(null);

  useEffect(() => {
    API.tramites("https://www.cultura.gob.ar/api/v2.0/tramites/?format=json")
      .then(setTramites)
      .catch(console.log);
  }, []);

  return (
    <>
      <Link as={ReactRouter} to={`/`}>
        <h1>Inicio</h1>
      </Link>
      {tramites?.results.map((result) => (
        <Container pb={3}>
          <Text fontSize='xl'>{result.titulo}</Text>
          <Markup content={result.cuerpo}></Markup>
        </Container>
      ))}
    </>
  );
};
