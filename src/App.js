import { Button } from "react-bootstrap"; 
import VistaHC from "./VistaHC";

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
      <VistaHC />
    </div>
  );
}

export default App;
