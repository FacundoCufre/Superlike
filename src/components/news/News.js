import NewsItems from '../newItem/NewItem'
import './news.css'

const tex1 = 
<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur, a feugiat volutpat phasellus interdum fames sodales sapien tellus, ante velit justo ultricies augue malesuada nascetur. Quisque fames class massa parturient vitae luctus, senectus fringilla taciti netus vehicula, eget non nascetur praesent semper. Sagittis penatibus rutrum placerat eros ac varius nulla ornare inceptos tempus.
</p>

const News = () => {
    return(
        <section className='news'>
            <div className='news-h2s'>
                <h2>ÚLTIMAS</h2>
                <h2>NOVEDADES</h2>
            </div>
            <div className='news-h2s-decoration-1'/>
            <div className='news-h2s-decoration-2'/>
            <section className='news-items'>
                <NewsItems title={'ÉXITO EN EL PRIMER EVENTO'} date={'17-9-2022'} text={tex1}/>
                <NewsItems/>
                <NewsItems/>
            </section>
            
        </section>
    )
}

export default News