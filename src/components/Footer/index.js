import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-copy">
                <p>
                    2024 &copy; todos los derechos reservados
                </p>
            </div>
            <div className="icon__footer">
            <a href="https://wa.link/96ema1" target="_blank" title="WhatsApp" rel="noreferrer">
    <i className="fab fa-whatsapp"></i>
</a>
<a href="https://www.instagram.com/royalcaninar/?hl=es" target="_blank" title="Instagram/comidagatitos" rel="noreferrer">
    <i className="fab fa-instagram"></i>
</a>

            </div>
            <div className="logo">
                <img src="logofooter.jpg" alt="logo" className="logo" />
            </div>
        </footer>
    );
}

export default Footer;
