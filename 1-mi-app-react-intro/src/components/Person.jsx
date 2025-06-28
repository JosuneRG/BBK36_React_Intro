// 1- Crear un componente Person que acepte props name, surname y age, y 
// nos muestre dichos datos dentro de etiquetas span.
// src/components/Person.jsx
// Componente de clase
import React from 'react'; // ✅ ¡IMPORTANTE!

class Person extends React.Component {
    render() {
        const { name, surname, age } = this.props;
        return (
            <div>
                <span>Nombre: {name}</span><br />
                <span>Apellido: {surname}</span><br />
                <span>Edad: {age}</span>
                <hr />
            </div>
        );
    }
}

export default Person;

//3 - A Crea el componente Person con functional component 
// src/components/PersonFunctional.jsx
function Person3A({ name, surname, age }) {
  return (
    <div>
      <span>Nombre: {name}</span><br />
      <span>Apellido: {surname}</span><br />
      <span>Edad: {age}</span>
    </div>
  );
}

//3 - B Crea el componente Person con class component
class Person3B extends React.Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <span>Nombre: {name}</span><br />
        <span>Apellido: {surname}</span><br />
        <span>Edad: {age}</span>
      </div>
    );
  }
}

