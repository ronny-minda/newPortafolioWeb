import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  createDraggable,
  createDroppable,
  type DragEventHandler,
} from "@thisbeyond/solid-dnd";
import { createSignal, Show, type JSX } from "solid-js";

import "./css/style.css";

// Define tipos para props de Draggable y Droppable
type DroppableProps = {
  children: JSX.Element;
};

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div
      use:draggable
      class="draggable"
      classList={{ "opacity-25": draggable.isActiveDraggable }}
    >
      Draggable
    </div>
  );
};

const Droppable = (props: DroppableProps) => {
  const droppable = createDroppable(1);
  return (
    <div
      use:droppable
      class="droppable soltar"
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable.
      {props.children}
    </div>
  );
};

export const FrontEnd2 = () => {
  const [where, setWhere] = createSignal("outside");

  const onDragEnd: DragEventHandler = ({ droppable }) => {
    if (droppable) {
      setWhere("inside");
    } else {
      setWhere("outside");
    }
  };

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div class="min-h-15">
        <Show when={where() === "outside"}>
          <Draggable />
        </Show>
      </div>
      <Droppable>
        <Show when={where() === "inside"}>
          <Draggable />
        </Show>
      </Droppable>
      <DragOverlay>
        <div class="draggable">Drag Overlay!</div>
      </DragOverlay>
    </DragDropProvider>
  );
};

export default FrontEnd2;
