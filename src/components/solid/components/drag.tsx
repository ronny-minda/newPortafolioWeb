// import { JSX } from 'solid-js';
import type { Component, JSX } from 'solid-js';

interface DragProps {
  children: JSX.Element; 
  id: string;            
}

const Drag: Component<DragProps> = ({ children, id }) => {

    const handleDragStart = (event: DragEvent) => {
        const target = event.target as HTMLDivElement
        // event.target.classList.add("dragging");
        event.dataTransfer?.setData("text", id);
        console.log("handleDragStart")
    };

    const handleDragEnd = (event: DragEvent) => {
        const target = event.target as HTMLDivElement
        // target.classList.remove("dragging");
        console.log("handleDragEnd")
    };

    return (
        <>
            <div
                draggable="true"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}

                // style={{display: "contents"}}
            >
                {children}
            </div>
        </>
    )
}

export default Drag