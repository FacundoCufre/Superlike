import './newItem.css'

const NewsItems = ({title, text, date}) => {
    return(
        <div className='new'>
            <div className='new-date'>
                <span>{date}</span>
            </div>
            <div className='new-headline'>
                <div className='new-headline-title'>
                    <span>{title}</span>
                </div>
                <div className='new-headline-text'>
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default NewsItems