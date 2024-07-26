//rafc+TAB

//interface: estructura del objeto | tipado de datos - objeto
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNumero: number;
}

export const ObjetosLiterales = () => {
  //Lógica del componente
  //Objetos 
  const persona: Persona = {
    nombreCompleto: 'Viviana Flores',
    edad: 32,
    direccion: {
      pais: 'Ecuador',
      casaNumero: 365
    }
  }

  //ingresar a la propiedad del objeto
  //persona.nombreCompleto = 'Viviana Flores';
  //NO ES POSIBLE INSTANCIAR LA INTERFACE
  //const persona2 = new Persona();

  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  )
}
