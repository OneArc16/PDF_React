import { Button } from "react-bootstrap"; 

function App() {

  const Menu = () => {
    return (
    <nav>
      <Button>Ver web</Button>
      <Button>Ver PDF</Button>
      <Button>Descargar PDF</Button>
    </nav>
    )
  };

  return (
    <div>
      <Menu />
      <h1>Hola voy hacer un PDF</h1>
    </div>
  );
}

export default App;
