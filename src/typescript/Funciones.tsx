//rafc + TAB 

export const Funciones = () => {

    //Función flecha - retonar un valor
    const sumar = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(5, 6)}</span>
        </div>
    )
}
