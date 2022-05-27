import { useEffect, useState } from "react";
import * as API from "../services/ministerioApi";

// ---- CHAKRA ----
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Center,
  Text,
} from "@chakra-ui/react";

import { Link as ReactRouter } from "react-router-dom";

export const Inicio = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    API.menu().then(setMenu).catch(console.log);
  }, []);

  return (
    <>
      <Center>
        <UnorderedList>
          {Object.keys(menu).map((option) => (
            <Link as={ReactRouter} to={`/${option}`}>
              <ListItem key={option}>{option}</ListItem>
            </Link>
          ))}
        </UnorderedList>
      </Center>
    </>
  );
};
