import React, { useContext, useState } from "react";
import { aspects } from "../../Context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaBars } from "react-icons/fa";

const aspectListArray = [ //list of the options
  {
    id: "Fuel",
    name: "Fuel efficiency",
  },
  {
    id: "comforts",
    name: "Creature comforts",
  },
  {
    id: "speed",
    name: "Speed",
  },
  {
    id: "ridequality",
    name: "Ride quality",
  },
  {
    id: "reliable",
    name: "Reliable",
  },
];

const Question2 = () => {
  //get global state
  const { aspect, setAspect } = useContext(aspects);

  // usestate for the new ordered array
  const [aspectList, updateAspectList] = useState(aspectListArray);

  // Handels the reordering and connects the list to the global state
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(aspectList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAspect(items);
    updateAspectList(items);
  }

  return (
    <div id="question2">
      <h2 className="questionTitle">
        Order the <span className="questionHighlight">aspects</span> of a car <span className="questionHighlight">most important</span> to you.
        <p>(1 is most important)</p>
      </h2>
      <DragDropContext onDragEnd={handleOnDragEnd}> {/* drag drop component */}
        <Droppable droppableId="aspectList">
          {(provided) => (
            <ol
              className="orderList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
            
              {aspectList.map(({ id, name }, index) => {  //maps aspectListArray to the component
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        className="listItem"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="listItemWrapper">
                          <p>{name}</p>
                          <FaBars className="dragIcon" color="var(--blue)" />
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Question2;
