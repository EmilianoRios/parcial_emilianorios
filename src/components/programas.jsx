import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../services/ministerioApi";
import { Markup } from 'interweave';

// ---- CHAKRA ----
import { Link, Text, Container } from "@chakra-ui/react";

// ---- REACT ROUTER ----
import { Link as ReactRouter } from "react-router-dom";

export const Programas = () => {
  const [programas, setProgramas] = useState(null);

  useEffect(() => {
    API.institutos("https://www.cultura.gob.ar/api/v2.0/programas/?format=json")
      .then(setProgramas)
      .catch(console.log);
  }, []);

  return (
    <>
      <Link as={ReactRouter} to={`/`}>
        <h1>Inicio</h1>
      </Link>
      {programas?.results.map((result) => (
        <Container pb={3}>
          <Text fontSize='xl'>{result.nombre}</Text>
          <Markup content={result.descripcion}></Markup>
        </Container>
      ))}
    </>
  );
};
