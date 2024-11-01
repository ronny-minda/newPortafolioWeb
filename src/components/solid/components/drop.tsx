import { createSignal } from "solid-js";
import type { Component, JSX } from "solid-js";
import { elementos, estado, setEstado } from "../frontEnd";

interface DropProps {
    children: JSX.Element;
  }

const Drop: Component<DropProps> = ({ children }) => {

    const [ hover, setHover ] = createSignal(false)

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        const target = event.target as HTMLDivElement
        // event.preventDefault(); // Necesario para permitir el drop
        // event.currentTarget.classList.add("dragover"); // Añadir clase 'dragover' a la zona
        // console.log("hover")
        setHover(true)
    };
        
    const handleDrop = (event: DragEvent) => {
        // console.log("suelta")
        const target = event.currentTarget as HTMLDivElement
        event.preventDefault();
        const data = event.dataTransfer?.getData("text");
        if( data != undefined ) {
            // console.log(elementos()[Number(data)])
            const elementoSelecionado = elementos()[Number(data)]
            const nuevoEstado = estado().push(elementoSelecionado)
            console.log("nuevoEstado")
            // console.log([ ...estado(), elementoSelecionado ])
            console.log([ ...estado(), elementoSelecionado ])
            // setEstado([ ...estado(), elementoSelecionado ])
            // setEstado([])
            // console.log("actualizacion del estado.")
        }
        
        // if(data) {
    //     const element = document.getElementById(data);
    //     if(element) {
    //         target.appendChild(element);
    //         target.classList.remove("dragover");
    //     }
    // }
        setHover(false)
    };

    const handleDragLeave = (event: DragEvent) => {
        const target = event.currentTarget as HTMLDivElement
        // target.classList.remove("dragover");
        // console.log("sale")
        setHover(false)
    };

    return (
        <>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                
                style={{
                    display: "contents",
                    // height: "100px",
                    // width: "100px",
                }}
            >
                <div class="conteHtml">
                    {
                        hover() && <div class="hoverElemento">nuevo elemento</div>
                    }
                    { children }
                </div>
            </div>
        </>
    )
}

export default Drop