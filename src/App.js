import './App.css';
import Donaciones from './components/Donaciones/Donaciones';
import Footer from './components/Footer/Footer';
import Formularios from './components/Formularios/Formularios';
import Nav from './components/Nav/Nav';
import useDeviceSize from "./components/Resize/Resize";
import { useState, useEffect } from "react";



function App() {

  const [isMobile, setIsMobile] = useState(true);
  const arrayWidth = useDeviceSize();
  const width = arrayWidth[0];

  useEffect(() => {
    if (width >= 425) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width, isMobile]);


  return (
    <div id='index' className="App">
      <Nav />
      <Formularios />
      <Donaciones />
      <Footer/>
    </div>
  );
}

export default App;
