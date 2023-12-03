import './Style.css'

export default function Main(props) {
    return (
        <div className='main-container'>
            <div>
                <img src={props.img} className='img-container' />
            </div>

            <div className='text-container'>
                <p className='text-mute'><span className='bold-text'><i class="fa-solid fa-location-dot icon-red"></i>{props.country}</span> <a className='text-mute' href='#'>View on Google Map</a> </p>
                <h2>{props.heading} </h2>
                <p className='date-text'>{props.date}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
        </div>
    )
}