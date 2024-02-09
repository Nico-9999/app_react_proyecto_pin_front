import './App.css';
import Formulario from './components/Formulario'; 
import {Accordions} from './components/Formulario/Accordion';
import {MyCarousel} from './components/Formulario/Carousel';
import { NavBar } from './navigation/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <MyCarousel/>
          <Accordions/>
          <Formulario/>
          <Footer/>

        </header>
      </div>
    
  );
}

export default App;
