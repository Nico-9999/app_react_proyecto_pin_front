import { Carousel } from 'react-bootstrap';
function MyCarousel () {
    return(
        <Carousel id="link">
        <Carousel.Item>
          <img
               style={{ width: '100px', height: '900px' }}
            className="d-block w-100 img-fluid"
            src="/imagen 3.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color:'black' }}>Bebederos y comederos</h3>
            <p style={{ color: '#1A1A1A' }}>Introduce a tu querido amigo peludo a la practicidad y elegancia con nuestro Comedero y Bebedero 2 en 1. Este innovador sistema combina la función esencial de proporcionar comida y agua en un diseño único y funcional.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
                       style={{ width: '100px', height: '900px' }}
            className="d-block w-100"
            src="/comida2..webp"
            alt="Second slide"
          />
          <Carousel.Caption>
             <h3 style={{ color: 'black' }}> Comida humeda Gourmet</h3>
            <p style={{ color: '#1A1A1A' }}>Descubre una experiencia gastronómica excepcional para tu gato con nuestra deliciosa línea de comida húmeda premium. Elaborada con ingredientes de la más alta calidad, nuestra fórmula gourmet combina sabores irresistibles y nutrientes esenciales para satisfacer las exigencias nutricionales de tu felino.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           style={{ width: '100px', height: '900px' }}
            className="d-block w-100"
            src="/camagato.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>Comodidad para tu gato.</h3>
            <p style={{ color: '#1A1A1A' }}>Su diseño ergonómico y acogedor proporciona un refugio seguro para que tu gato se relaje, duerma y recargue energías. Contamos con muchos modelos, consulta por el tuyo.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
}

export {MyCarousel}