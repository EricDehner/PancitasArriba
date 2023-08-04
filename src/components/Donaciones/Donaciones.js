import DonacionesItem from "../DonacionesItem/DonacionesItem";
import "./Donaciones.css"
import donations from "./donations";

const Donaciones = () => {


    if (window.innerWidth <= 425) {
        return (
            <section id="donaciones" className="mobile_donations">
            <h2 className="donations_title">¡Tus donaciones son las que nos ayudan a solventar nuestros gastos!</h2>
            <div className="donations_content">
                {donations.map((donation) => (
                    <DonacionesItem id={donation.id} url={donation.url} price={donation.price} />
                ))}
            </div>
        </section>
        );
    }

    return (

        <section id="donaciones" className="donations">
            <h2 className="donations_title">¡Tus donaciones son las que nos ayudan a solventar nuestros gastos!</h2>
            <div className="donations_content">
                {donations.map((donation) => (
                    <DonacionesItem id={donation.id} url={donation.url} price={donation.price} />
                ))}
            </div>
        </section>
    )

}
export default Donaciones