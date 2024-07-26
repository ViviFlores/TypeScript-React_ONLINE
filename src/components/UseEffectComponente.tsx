import { useEffect, useState } from "react";

export const UseEffectComponente = () => {
    //hook useState: cambiar el estado de un valor o un componente
    const [valor, setValor] = useState<boolean>(false);

    //hook useEffect: se ejecuta en segundo plano
    //- Al momento que se cargue la página
    //- Sufra algún cambio la página
    //- Debido a una lista de dependencias
    useEffect(() => {
        //código a ejecutar
        console.log('Desde el useEffect');

    }, [valor]); //Lista de dependencias

    //función cambiar el dato del valor 
    const cambiarValor = () => {
        setValor(!valor); //false
    }

    return (
        <div>
            <h3>Hook UseEffect</h3>
            <button onClick={cambiarValor}>Cambiar</button>
        </div>
    )
}
