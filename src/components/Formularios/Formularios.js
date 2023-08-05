import "./Formularios.css"
import Icon from "./Assets/icon.png"

const Formularios = () => {

    if (window.innerWidth <= 474) {
        return (
            <section id="formularios" className="mobileForm">
                <h2 className="mobileForm_title">Formularios</h2>
                <div className="mobileForm_content">
                    <a rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/1xWPpMX3tNHORiES69c0BMpANv8AYHY25BTVHyUI2Rxo" className="mobileForm_content-mp">
                        <div className="mobileForm_content-card">
                            <img src={Icon} alt="" className="mobileForm_content-card--img" />
                            <p className="mobileForm_content-card--price">Tránsito</p>
                        </div>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeuWfmHcynNyyQgYndTs-3CIuWoLfTTtNOPtdJ3Yyn9kf6DjA/viewform?usp=sf_link" className="mobileForm_content-mp">
                        <div className="mobileForm_content-card">
                            <img src={Icon} alt="" className="mobileForm_content-card--img" />
                            <p className="mobileForm_content-card--price">Adopción</p>
                        </div>
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section id="formularios" className="form">
            <h2 className="form_title">Formularios</h2>
            <div className="form_content">
                <a rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/1xWPpMX3tNHORiES69c0BMpANv8AYHY25BTVHyUI2Rxo" className="form_content-mp">
                    <div className="form_content-card">
                        <img src={Icon} alt="" className="form_content-card--img" />
                        <p className="form_content-card--price">Tránsito</p>
                    </div>
                </a>
                <a rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeuWfmHcynNyyQgYndTs-3CIuWoLfTTtNOPtdJ3Yyn9kf6DjA/viewform?usp=sf_link" className="form_content-mp">
                    <div className="form_content-card">
                        <img src={Icon} alt="" className="form_content-card--img" />
                        <p className="form_content-card--price">Adopción</p>
                    </div>
                </a>
            </div>
        </section>
    )

}
export default Formularios