import s from './Header.module.css'
const Header = (props) => {
    return(
        <div className = {s.wrapper}>
            <img src = 'https://cdn.pixabay.com/photo/2017/09/10/11/17/bridge-2735208__340.jpg' alt = 'dnipro'/>
        </div>
    )
}

export default Header;