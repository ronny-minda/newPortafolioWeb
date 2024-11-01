import AsideL from "./components/frontEnd/asideL";
import ConteCenter from "./components/frontEnd/conteCenter";
import AsideR from "./components/frontEnd/asideR";
import "./css/style.css"
import { createSignal, type JSX } from "solid-js";
import { createStore } from "solid-js/store"


const Input = () => {

  return (
      <input type="text" placeholder="Soy un imput" />
  )
}

// export const [ estado, setEstado ] = createSignal([<input type="text" style={{color: "red"}} placeholder="Soy un imput" />])
export const [ estado, setEstado ] = createSignal<JSX.Element[]>([
  <input type="text" placeholder="Soy un imput jjeee" />
])

export const [ elementos, setElemenetos ] = createSignal([
  <p>Soy un elemento P</p>,
  <input type="text" placeholder="Soy un Input" />
])

export const [ valor, setValor ] = createSignal(1)

const FrontEnd = () => {

  return (
    <>
      <div
        // onclick={()=> {
        //   setEstado([<p>soy un p</p>])
        //   setValor(valor() + 1)
        //   console.log("un click de raeactividad.")
        // }}
      class="main">
        
        <AsideL />
        <ConteCenter />
        <AsideR />
      </div>
    </>
  );
}

export default FrontEnd

// const FrontEnd = () => {
//   const [dropText, setDropText] = createSignal("Suelta aquí");

//   const handleDragStart = (event: DragEvent) => {
//     // event.target.classList.add("dragging"); // Añadir clase 'dragging' al arrastrar
//     event.dataTransfer.setData("text", event.target.id);
//     console.log("handleDragStart")
//   };

//   const handleDragEnd = (event) => {
//     // event.target.classList.remove("dragging"); // Quitar clase 'dragging' cuando termina el arrastre
//     console.log("handleDragEnd")
//   };

//   const handleDragOver = (event) => {
//     // event.preventDefault(); // Necesario para permitir el drop
//     // event.currentTarget.classList.add("dragover"); // Añadir clase 'dragover' a la zona
//     console.log("handleDragOver")
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text");
//     console.log(data)
//     const element = document.getElementById(data);
//     event.currentTarget.appendChild(element); // Mover el elemento al contenedor de la zona de suelta
//     event.currentTarget.classList.remove("dragover"); // Quitar clase 'dragover' tras el drop
//     setDropText("¡Elemento soltado!");
//   };

//   const handleDragLeave = (event) => {
//     event.currentTarget.classList.remove("dragover"); // Quitar la clase 'dragover' cuando se sale
//     console.log("handleDragLeave")
//   };

//   return (
//     <div>
//       <div
//         class="mober"
//         id="drag-item"
//         draggable="true"
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         // style={{
//         //   textAlign: "center",
//         //   lineHeight: "100px",
//         // }}
//       >
//         Arrástrame
//       </div>

//       <div
//         class="soltar"
//         id="drop-zone"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         onDragLeave={handleDragLeave}
//         // style={{
//         //   textAlign: "center",
//         //   lineHeight: "200px",
//         // }}
//       >
//         {dropText()}
//       </div>
//     </div>
//   );
// }

// interface MousePosition {
//   x: number;
//   y: number;
// }

// const FrontEnd = () => {
//     const [mousePosition, setMousePosition] = createSignal<MousePosition>({ x: 0, y: 0 });
//     const [mpS, setMpS] = createSignal<string>("translateX(0px) translateY(0px)");
//     const [posisionRestar, setPosisionRestar] = createSignal<MousePosition>({ x: 0, y: 0 });
//     const [click, setClick] = createSignal<boolean>(false);
//     const [animacion, setAnimacion] = createSignal<boolean>(false);
  
//     const handleMouseMove = (event: MouseEvent) => {
//       const {clientX, clientY} = event
//       const x = clientX - posisionRestar().x
//       const y = clientY - posisionRestar().y

//       if(click()) {
//         setMousePosition({ x: event.clientX, y: event.clientY });
//         setMpS(`translateX(${x}px) translateY(${y}px)`)
//       }
//     };
  
//     onMount(() => {
//       window.addEventListener("mousemove", handleMouseMove);
  
//       onCleanup(() => {
//         window.removeEventListener("mousemove", handleMouseMove);
//       });
//     });
    
//     // return (
//     //   <>

//     //   <div class="main">
//     //     <AsideL/>
//     //     <ConteCenter/>
//     //     <AsideR/>
//     //   </div>
//     //   </>
//     // )
    
//     return (
//       <>
//         {/* <h2>Posición del mouse:</h2>
//         <p>X: {mousePosition().x}</p>
//         <p>Y: {mousePosition().y}</p>
//         <p>X: {posisionRestar().x}</p>
//         <p>Y: {posisionRestar().y}</p>
//         <p>click: {`${click()}`}</p>
//         <p>mpS: {mpS()}</p> */}

//         <div
//           style={{transform: mpS(), transition: animacion()?"0.5s":"0s"}}
//           class="mober"
//           onMouseUp={(e)=>{
//             setClick(false)
//             setAnimacion(true)
//             setMpS(`translateX(0px) translateY(0px)`)
//             setPosisionRestar({x: 0, y: 0})
//           }}
//           onMouseDown={(e)=>{
//             setClick(true)
//             setAnimacion(false)
//             const {clientX, clientY} = e
//             setPosisionRestar({x:clientX, y:clientY})
//           }}
//         ></div>

//         <div class="mober" draggable={true}></div>

//         <div 
//           // draggable={true}
//           class="soltar"
//           ondrop={(e)=>console.log("ondrop")}
//         >soltar</div>
//       </>
//     );
// };

