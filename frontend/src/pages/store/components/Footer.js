import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../node_modules/awesome-notifications/dist/style.css'

import {
    faMoneyBillWave,
    fa


} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Retro Shop (2022)</h3>
                <p className="about-paragraph mt-3">
                    Vendemos productos retro de calidad. Reacondicionamos consolas y las devolvemos a su estado original. ¡Tenemos kits para que las reacondiciones tu mismo!


                </p>

                <p className="footer-links p-2">
                    <a href="/">Home</a>
                    |
                    <a href="/">Anuncios</a>
                    |
                    <a href="/">Galería</a>
                    |
                    <a href="/">Equipo</a>
                </p>
                <p className="footer-company-name">© 2022 Retro Shop SpA.</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Agua Santa 4, Viña del Mar, Valparaíso</span></p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+569 985480380</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a>info@retroshop.cl</a></p>
                </div>
            </div>
            <div className="footer-right p-3">
                <p className="footer-company-about">
                    <span>Siguenos en:</span>
                </p>
                <div className="footer-icons">
                    <a >    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </a>
                    <a ><i className="fab fa-instagram"></i></a>
                    <a ><i className="fab fa-youtube"></i></a>
                </div>
            </div>

        </footer>

    );
}
export default Footer;
