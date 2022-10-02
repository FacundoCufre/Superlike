import './eventTypeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventTypeCard = ({title, subtitle, icono, text}) => {
    return(
        <div className='event-card'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{text}</p>
            <div className='faIcon'><FontAwesomeIcon icon={icono}></FontAwesomeIcon></div>
            
        </div>
    )
}

export default EventTypeCard