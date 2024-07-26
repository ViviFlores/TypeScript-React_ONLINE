//Componente react
//rafc+TAB

export const TiposBasicos = () => {
    //variable - typescript
    //let nombre: string | number = 'Viviana';
    //nombre = 30;
    //constante - typescrit
    const nombre: string = 'Viviana';
    const edad: number = 32;
    const donanteOrganos: boolean = true;
    //arreglos - typescript
    const poderes: string[] = ['fuerza, volar, invisibilidad'];
    //agregar nuevo elemento en el arreglo
    poderes.push('velocidad');
    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'Donante' : 'No Donante'}
            <br />
            {poderes.join(', ')}
        </div>
    )
}
