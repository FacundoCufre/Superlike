import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import EventTypeCard from '../eventTypeCard/EventTypeCard'
import './eventsTypes.css'

const EventsTypes = () => {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eaque exercitationem iusto deserunt aspernatur repellendus, officia in, culpa adipisci cumque corporis, alias debitis odio labore nulla a voluptatum ad? Aliquam!'
    return(
        <section className='eventsTypes' id='eventsTypes'>
            <h2 className='eventsTypes-title'>TIPOS DE EVENTOS</h2>
            <section className='eventsTypes-cards'>
                <EventTypeCard title={'CITAS RÁPIDAS'} subtitle={'HETERO'} icono={faBellConcierge} text={text}/>
                <EventTypeCard title={'CITAS RÁPIDAS'} subtitle={'GAY'} icono={faBellConcierge} text={text}/>
                <EventTypeCard title={'CITAS RÁPIDAS'} subtitle={'LESBIANAS'} icono={faBellConcierge} text={text}/>
                <EventTypeCard title={'PRÓXIMAMENTE'}/>
            </section>
            
        </section>
    )
}

export default EventsTypes