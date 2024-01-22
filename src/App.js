import './App.css';
import Formulario from './components/Formulario'; 
import {Accordions} from './components/Formulario/Accordion';
import {MyCarousel} from './components/Formulario/Carousel';
import { NavBar } from './navigation/Navbar';

function App() {
  return (
  
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <MyCarousel/>
          <Accordions/>
          <Formulario/>

        </header>
      </div>
    
  );
}

export default App;
