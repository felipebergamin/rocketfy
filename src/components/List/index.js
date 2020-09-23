import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { useDrop } from "react-dnd";

import BoardContext from "../Board/context";
import { Container } from "./styles";
import Card from "../Card";

function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item) {
      if (data.cards.length) return;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;

      console.log({
        draggedListIndex,
        targetListIndex,
        draggedIndex,
      });

      move(draggedListIndex, targetListIndex, draggedIndex);
      item.index = data.cards.length;
      item.listIndex = targetListIndex;
    },
  });

  return (
    <Container ref={dropRef} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
