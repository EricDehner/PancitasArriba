import "./DonacionesItem.css"
import Icon from "./Assets/icon.png"


const DonacionesItem = ({ id, url, price }) => {

    return (
        <a rel="noreferrer" target="_blank" href={url} className="donationsItem_content-mp" key={id}>
            <div className="donationsItem_content-card">
                <img src={Icon} alt="" className="donationsItem_content-card--img" />
                <p className="donationsItem_content-card--price">${price}</p>
            </div>
        </a>
    )
}
export default DonacionesItem