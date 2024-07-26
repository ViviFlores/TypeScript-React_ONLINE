import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Usuarios = () => {
    //hook useEffect: cargar la data que obtenemos desde la API
    useEffect(() => {
        //llamando a la API(ENDPOINT)
        reqResApi.get('/users').then(resp => {
            //imprimir respuesta
            console.log(resp);
        }).catch(console.log) //imprimir el error
    }, []);

    return (
        <div>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
