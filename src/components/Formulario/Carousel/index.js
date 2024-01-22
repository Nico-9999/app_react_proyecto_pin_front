import { Carousel } from 'react-bootstrap';
function MyCarousel () {
    return(
        <Carousel id="link">
        <Carousel.Item>
          <img
               style={{ width: '500px', height: '700px' }}
            className="d-block w-100 img-fluid"
            src="/foto1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primer Slide</h3>
            <p>Descripción del primer slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
                       style={{ width: '500px', height: '700px' }}
            className="d-block w-100"
            src="/image2.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Descripción del segundo slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tercer Slide</h3>
            <p>Descripción del tercer slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
}

export {MyCarousel}