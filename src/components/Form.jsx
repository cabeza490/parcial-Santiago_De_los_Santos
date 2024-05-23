import React, {useState} from 'react';
import Card from './Card';

const Form = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        porque: "",
    });
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleNombre = event => 
        setFormulario({ ...formulario, nombre: event.target.value });
    const handlePorque = (event) => 
        setFormulario({ ...formulario, porque: event.target.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formulario.nombre.length > 3 &&
            formulario.porque.length > 6 &&
            !/\s/.test(formulario.nombre)
        ) {
            setShow(true);
            setError(false);
        } else {
            setShow(false);
            setError(true);
        }
    };
    console.log(formulario);

  return (
    <>
    <form onSubmit={handleSubmit}>

        <label>Personaje favorito:</label>
        <input 
        type="text" 
        value={formulario.nombre} 
        onChange={handleNombre} />

        <label>Por qué es tu personaje favorito?</label>
        <input 
        type="text" 
        value={formulario.porque} 
        onChange={handlePorque}/>

        <button>Enviar</button>

        {show && (
            <Card formulario={formulario} />
        )}

        {error && (
            <p style={{color: "red"}}>Por favor chequea que la información sea correcta</p>
        )}
    </form>
    </>
  )
}

export default Form;
