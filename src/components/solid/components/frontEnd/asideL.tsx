
export const AsideL = () => {
  return (
    <>
      <aside class="asideL">
        {/* <Drag> */}
          <div>listo</div>
        {/* </Drag> */}
      </aside>
    </>
  )
};

export default AsideL



// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//     #myElement {
//       width: 100px;
//       height: 100px;
//       background-color: lightblue;
//       margin: 20px;
//     }
//   </style>
//   <title>Obtener estilos de un elemento</title>
// </head>
// <body>

//   <div id="myElement">Soy un div</div>

//   <script>
//     const element = document.getElementById('myElement');
//     const computedStyles = window.getComputedStyle(element);

//     // Puedes acceder a estilos individuales como por ejemplo 'background-color'
//     console.log('Color de fondo:', computedStyles.backgroundColor);
//     console.log('Ancho:', computedStyles.width);
//     console.log('Altura:', computedStyles.height);

//     // También puedes iterar por todas las propiedades computadas
//     for (const property of computedStyles) {
//       console.log(`${property}: ${computedStyles.getPropertyValue(property)}`);
//     }
//   </script>

// </body>
// </html>






// import { createSignal } from 'solid-js';

// function App() {
//   const [dropText, setDropText] = createSignal<string>("Suelta aquí");

//   const handleDragStart = (event: DragEvent) => {
//     const target = event.target as HTMLElement;
//     target.classList.add("dragging");
//     event.dataTransfer?.setData("text", target.id);
//   };

//   const handleDragEnd = (event: DragEvent) => {
//     const target = event.target as HTMLElement;
//     target.classList.remove("dragging");
//   };

//   const handleDragOver = (event: DragEvent) => {
//     event.preventDefault(); // Necesario para permitir el drop
//     const target = event.currentTarget as HTMLElement;
//     target.classList.add("dragover");
//   };

//   const handleDrop = (event: DragEvent) => {
//     event.preventDefault();
//     const data = event.dataTransfer?.getData("text");
//     if (data) {
//       const element = document.getElementById(data);
//       if (element) {
//         const target = event.currentTarget as HTMLElement;
//         target.appendChild(element);
//         target.classList.remove("dragover");
//         setDropText("¡Elemento soltado!");
//       }
//     }
//   };

//   const handleDragLeave = (event: DragEvent) => {
//     const target = event.currentTarget as HTMLElement;
//     target.classList.remove("dragover");
//   };

//   return (
//     <div>
//       <div
//         id="drag-item"
//         draggable="true"
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         style={{
//           textAlign: "center",
//           lineHeight: "100px",
//         }}
//       >
//         Arrástrame
//       </div>

//       <div
//         id="drop-zone"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         onDragLeave={handleDragLeave}
//         style={{
//           textAlign: "center",
//           lineHeight: "200px",
//         }}
//       >
//         {dropText()}
//       </div>
//     </div>
//   );
// }

// export default App;
