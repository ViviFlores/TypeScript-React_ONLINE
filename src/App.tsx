//import { UseEffectComponente } from "./components/UseEffectComponente";
import { Usuarios } from "./components/Usuarios";
//import { UseStateContador } from "./components/UseStateContador";
//import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";

//Componente React padre - funciones
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción TS - React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones />*/}
      {/*<UseStateContador/>*/}
      {/*<UseEffectComponente/>*/}
      <Usuarios />
    </div>
  )

}

export default App;