import React, { useCallback, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const balls = ["orange", "royalBlue"];
interface typeball {
  id: string;
  color: string;
}
function Beautiful() {
  const [play, setPlay] = useState<typeball[]>([
    {
      id: "1",
      color: "orange",
    },
    {
      id: "2",
      color: "royalBlue",
    },
  ]);
  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...play];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlay(items);
  };
  return (
    <World>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="ballPlay">
          {(provided) => (
            <World
              className="ballPlay"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {play.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <Ball
                      cl={item.color}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </World>
          )}
        </Droppable>
      </DragDropContext>
    </World>
  );
}
interface color {
  cl: string;
}
const World = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Ball = styled.div<color>`
  background-color: ${({ cl }) => cl};
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
`;
const BlueBall = styled.div`
  background-color: royalBlue;
  width: 160px;
  height: 160px;
  position: absolute;
  border-radius: 50%;
`;

export default Beautiful;
