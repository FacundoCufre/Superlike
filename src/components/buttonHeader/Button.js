import './button.css'

const Button = ({type, link}) => {
    return(
        <div className='button-header'>
            <div className='button-header--normal'><a href={link}><span>{type}</span></a></div>
            <div className='button-header--hov'></div>
        </div>
    )
}

export default Button