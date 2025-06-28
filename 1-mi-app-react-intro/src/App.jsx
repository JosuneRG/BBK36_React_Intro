// import React from 'react';
import Person from './components/Person'; 
import React from 'react'; // ✅ ¡IMPORTANTE!
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

// Componente de clase
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

// Componente funcional principal
function App() {
  return (
    <div className="App">
      <Welcome name="The Bridge" />
      <Person name="Ana" surname="López" age={30} />
      
      {/* 2 - Utilizar al menos el mismo componente 3 veces con props que tengan valores diferentes.*/}
      <Person name="Leire" surname="Sanchez" age={34} />
      <Person name="Pedro" surname="Mendez" age={40} />
      <Person name="Sergio" surname="Arraiz" age={80} />
      
      {/*Página Personal*/}
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
