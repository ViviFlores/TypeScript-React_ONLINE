import { useState } from "react";

export const UseStateContador = () => {

    //hook useState: Cambiar el estado de un componente o de un valor
    const [valorContador, setValorContador] = useState<number>(0);  //valor inicial - estado

    //función cambiar el estado del valor del contador
    const cambiarContador = (numero: number) => {
        //llamar función del hook useState
        setValorContador(valorContador + numero);
        //setValorContador(17+(-1)) 
        //                 17 - 1 -> 16
    }

    const cambiarContador2 = (numero: number) => {
        //llamar función del hook useState
        setValorContador(valorContador - numero);
        //setValorContador(17+(-1)) 
        //                 17 - 1 -> 16
    }

    return (
        <div>
            <h3>Contador: <small>{valorContador}</small></h3>
            <button
                className='btn btn-primary'
                onClick={() => cambiarContador(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => cambiarContador2(1)}
            >
                -1
            </button>
        </div>
    )
}
