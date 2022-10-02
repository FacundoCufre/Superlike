import Button from '../buttonHeader/Button'
import './header.css'

const Header = () => {
    return(
        <header>
            <Button type={'¿QUIÉNES SOMOS?'} link={'#who'}/>
            <Button type={'TIPOS DE EVENTOS'} link={'#eventsTypes'}/>
            <Button type={'PRÓXIMOS EVENTOS'}/>
            <div className='logo-header'>
                <span>SUPERLIKE</span>
                <span>CITAS RÁPIDAS</span>
            </div>
            <Button type={'CONTACTO Y REDES'}/>
            <Button type={'PROCESO DE INSCRIPCIÓN'}/>
            <Button type={'PREGUNTAS FRECUENTES'}/>
            
        </header>
    )
}

export default Header