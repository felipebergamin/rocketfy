import React from "react";

import { Container } from "./styles";
import List from "../List";
import { loadLists } from "../../services/api";

const lists = loadLists();

function Board() {
  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}

export default Board;
