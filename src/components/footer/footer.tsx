import Information from '../../container/information/information';
import './footer.scss';

function Footer() {
    return (
        <div id="footer">
            <Information
            ></Information>
            <div className="rights">
                <h2>
                    ©2023 Fusion Plastic, Todo los derechos reservados
                </h2>
            </div>
        </div>
    );
}

export default Footer;
