import EventsTypes from '../eventsTypes/EventsTypes'
import Novedades from '../news/News'
import NextEvents from '../nextEvents/NextEvents'
import Who from '../who/Who'
import './main.css'

const Main = () => {
    return(
        <main>
            <Novedades></Novedades>
            <Who></Who>
            <EventsTypes></EventsTypes>
            <NextEvents></NextEvents>
        </main>
    )
}

export default Main