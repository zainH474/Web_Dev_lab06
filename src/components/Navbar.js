import './Style.css'

export default function Navbar(props) {
    return (
        <div className="flex-container-nav">
            <img src={props.img} className="img-world" />
            <h3>My travel Journel</h3>
        </div>
    )
}