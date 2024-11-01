import { elementos } from "../../frontEnd";
import { createSignal, onMount, type JSX } from "solid-js";
import Drag from "../drag";

const AsideR = () => {
  
  const [ vista, setVista ] = createSignal<string>("HTML")

  const cambio = (valor: string) => {
    setVista(valor)
  }

  // const elementos: JSX.Element[] = [
  //   <p>Soy un elemento P</p>,
  //   <input type="text" placeholder="Soy un Input" />
  // ]

  // let elements = []
  // for (let i in document.createElement("div").constructor.prototype) {
  //   if (i.startsWith("HTML") && i.endsWith("Element")) {
  //     elements.push(i.replace("HTML", "").replace("Element", "").toLocaleLowerCase())
  //   }
  // }
  // console.log(elementos)

  return (
    <>
      <aside class="asideR">
        <div class="navR sonbra">
          <button class="boton1" onclick={(e)=>{cambio("HTML")}}>HTML</button>
          <button class="boton1" onclick={(e)=>{cambio("Stylos")}}>Stylos</button>
        </div>
        <div class="conteR scrollStyle">
          {
            vista()=="HTML" && <ElementosHtml elementos={elementos()}/>
          }
          {
            vista()=="Stylos" && <Stilos elementos={elementos()}/>
          }
        </div>
      </aside>
    </>
  )
};

const Stilos = ({elementos}: {elementos: JSX.Element[]}) => {

  const [ propiedad, setPropiedad ] = createSignal<string[]>([]) 

  
  onMount(()=>{
    let propiedades: string[] = []
    for(let elemento in elementos[0]) {
      // console.log(elemento);
      propiedades.push(elemento)
    }
    setPropiedad(propiedades)
  })

  return (
    <>
      <div>stilos..</div>
      {
        propiedad().map((value)=>{
          return (
            <span>{value}</span>
          )
        })
      }
    </>
  )
}

const ElementosHtml = ({elementos}: {elementos: JSX.Element[]}) => {

  // for(let elemento in elementos[0]) {
  //   console.log(elemento)
  // }

  return (
    <>
      <span>Elementos HTML</span>

      <ul>
        {
          elementos.map((value, key) => {
            return (
              <Drag id={key}>
                <li class="sonbra">{value?.nodeName}</li>
              </Drag>
            )
          })
        }
      </ul>
    
    </>
  )
}

export default AsideR